import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultNavigationProps } from '@/route/RootRoute';
import Component from '@/component/IndexComponent';
import img from '@/assets/images/index'

const { backPage } = img
const { LayoutButton } = Component

type EditProductProps = DefaultNavigationProps<'EditProduct'>;

  
export default function EditProduct({route}: EditProductProps ) {
  const navigation = useNavigation<EditProductProps['navigation']>();

  const  { product }  = route.params;

  const [id] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const onSave = () => {
    const updatedProduct  = {
        id: id,
        name: name,
        price: price,
        stock: stock,
    };
    fetch(`http://192.168.1.160:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
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
  const goBack = () => {
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.padBottom16}>
       <TouchableOpacity onPress={goBack} >
        <Image  source={backPage} style={styles.IconView} />
       </TouchableOpacity>
      </View>
      <Text style={styles.header}>แก้ไขสินค้า</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="ชื่อสินค้า"
        style={styles.input}
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="ราคา"
        style={styles.input}
      />
      <TextInput
        value={stock}
        onChangeText={setStock}
        placeholder="จำนวน"
        style={styles.input}
      />
      <LayoutButton title='บันทึก' onPress={() => {onSave()}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    borderRadius: 10,
  },
});

