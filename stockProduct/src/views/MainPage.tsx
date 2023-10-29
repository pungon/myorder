import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Component from '@/component/IndexComponent';
import { useNavigation } from '@react-navigation/native'
import { DefaultNavigationProps } from '@/route/RootRoute';

const { LayoutButton, useProducts, ConfirmationModal } = Component
 
type MainPageProps = DefaultNavigationProps<'MainPage'>

type Product = {
  id: number;
  name: string;
  price: string;
  stock: string;
};

type ItemProps = {
  item: {
    id: number;
    name: string;
    price: string;
    stock: string;
  };
    onEdit: (productItem: Product) => void;
    onDelete: () => void;
  }
  
const Item = ({ item, onEdit, onDelete } : ItemProps) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTextStyle}>{item.name}</Text>
    <Text style={styles.itemTextStyle}>{item.price} บาท</Text>
    <Text style={styles.itemTextStyle}>{item.stock} ชิ้น</Text>
    <TouchableOpacity onPress={() => onEdit(item)}>
      <Text style={styles.editButton}>แก้ไข</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onDelete}>
      <Text style={styles.deleteButton}>ลบ</Text>
    </TouchableOpacity>
  </View>
);

const MainPage = () => {
    const navigation = useNavigation<MainPageProps['navigation']>();
    const { products, setProducts } = useProducts();

    const goAddProduct = () => {
      navigation.navigate('AddProduct');
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const showDeleteModal = (product: Product) => {
      setSelectedProduct(product);
      setModalVisible(true);
    };
    
    const hideDeleteModal = () => {
      setSelectedProduct(null);
      setModalVisible(false);
    };
    
    const confirmDelete = () => {
      hideDeleteModal();

      fetch(`http://192.168.1.160:3000/products/${selectedProduct?.id}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.success) {
            console.log(data.message);
        } else {
            console.error(data.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    };

    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = products.filter((product: { name: string | string[]; }) => 
      product.name.includes(searchTerm)
  );

    useEffect(() => {
      const fetchProducts = () => {
        fetch('http://192.168.1.160:3000/products')
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => console.error('Error:', error));
      };
    
      fetchProducts();
    }, [products]);
  return (
    
    <View style={styles.container}>
      <ConfirmationModal 
        isVisible={isModalVisible} 
        productName={selectedProduct ? selectedProduct.name : ''}
        onConfirm={confirmDelete}
        onCancel={hideDeleteModal}
      />
      <Text style={styles.header}>จัดการ stock สินค้า</Text>
      <TextInput 
          placeholder="ค้นหาสินค้า..." 
          style={styles.searchInput} 
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
      />

      <ScrollView style={[styles.flex1]}>
      <View style={styles.padV10}>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <Item 
              item={item} 
              onEdit={(productItem) => {

                navigation.navigate('EditProduct', { product: productItem });
              }} 
              onDelete={() => showDeleteModal(item)}
          />
        )}
    keyExtractor={(item) => item.id.toString() }
    />
        </View>
      </ScrollView>
      
      <View style={styles.padTop20}>
       <LayoutButton title='เพิ่มสินค้าใหม่' onPress={() => {goAddProduct()}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flex1: {
    flex:1
  },
  padH: {
    paddingHorizontal: 5
  },
  padV10: {
    paddingVertical: 10
  },
  padTop20: {
    paddingTop: 20
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
  },
  itemTextStyle: {
    color: 'grey'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gray'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  editButton: {
    backgroundColor: '#A9E4FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,

    
  },
  deleteButton: {
    color: 'white',
    backgroundColor: '#FF7B53',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  }
});

export default MainPage;
