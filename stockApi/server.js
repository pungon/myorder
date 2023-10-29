const express = require('express');
const datas = require('./datas');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/products', (req, res) => {

    
    datas.getProducts((error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });

  
});

app.post('/addProducts', (req, res) => {
    const product = req.body;

    if (!product.name || !product.name || !product.price || !product.stock) {
        return res.status(400).json({ error: 'All product fields are required' });
    }

    datas.addProduct(product, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json(result);
    });
});

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;

    datas.updateProduct(productId, updatedProduct, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        res.json(updatedProduct);
    });
});

app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    datas.deleteProduct(productId, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        res.json({ success: true, message: 'Product deleted successfully' });
    });
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});