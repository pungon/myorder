import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultNavigationProps } from '@/route/RootRoute';
import img from '@/assets/images/index'

type AddProductProps = DefaultNavigationProps<'AddProduct'>
const { backPage } = img

const AddProductPage = ({  }) => {
  const navigation = useNavigation<AddProductProps['navigation']>();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [listProduct, setListProduct] = useState('');
  const [productList, setProductList] = useState('');

  const goBack = () => {
    
    navigation.goBack();
  };

  const handleSave = () => {
   
    
    console.log(productList)

    const product = {
        id: productList,
        name: productName,
        price: productPrice,
        stock: productStock,
    };

    fetch('http://192.168.1.160:3000/addProducts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        navigation.navigate('MainPage');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};



  useEffect(() => {
    fetch('http://192.168.1.160:3000/products')
    .then((response) => response.json())
    .then((data) => setListProduct(data))
    .catch((error) => console.error('Error:', error));
    setProductList((listProduct.length + 1 ).toString());
  }, [listProduct]);


  return (
    <View style={styles.container}>
       <View style={styles.pad20}>
        <View style={styles.padBottom16}>
       <TouchableOpacity onPress={goBack} >
        <Image  source={backPage} style={styles.IconView} />
      </TouchableOpacity>
      </View>
      <Text style={styles.header}>เพิ่มสินค้าใหม่</Text>

      <TextInput
        placeholder="ชื่อสินค้า"
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />

      <TextInput
        placeholder="ราคาสินค้า (บาท)"
        style={styles.input}
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="จำนวนสต็อก (ชิ้น)"
        style={styles.input}
        value={productStock}
        onChangeText={setProductStock}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSave} style={styles.customButton}>
        <Text style={styles.buttonText}>บันทึก</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pad20: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray'
  },
  IconView: {
    height: 24,
    width: 24,
  },
  padBottom16: {
    paddingBottom: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  customButton: {
    backgroundColor: "#04AEFD",
    padding: 10,
    borderRadius: 10, 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
  }
});

export default AddProductPage;
