const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'stockproduct'
});

function getProducts(callback) {
    pool.query('SELECT * FROM productlist ;', 
    callback);
}

function addProduct(product, callback) {
    const sql = 'INSERT INTO productlist (id, name, price, stock) VALUES (?, ?, ?, ?)';
    pool.query(sql, [product.id, product.name, product.price, product.stock], callback);
}

function updateProduct(productId, updatedProduct, callback) {
    const sql = 'UPDATE productlist SET name = ?, price = ?, stock = ? WHERE id = ?';
    pool.query(sql, [updatedProduct.name, updatedProduct.price, updatedProduct.stock, productId], callback);
}

function deleteProduct(productId, callback) {
    const sql = 'DELETE FROM productlist WHERE id = ?';
    pool.query(sql, [productId], callback);
}


module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};