import React from 'react';

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import MainPage from '@/views/MainPage';
import AddProductPage from '@/views/AddProductPage';
import EditProduct from '@/component/EditProduct';
type AddProductProps = {
  status: string
}

type Product = {
  id: number;
  name: string;
  price: string;
  stock: string;
};

type EditProductProps = {
  product: Product;
};


export type RootStackParamList = {

  MainPage: undefined;
  AddProduct: undefined;
  EditProduct: EditProductProps;

};


const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      <Stack.Screen name="AddProduct" component={AddProductPage} options={{ headerShown: false }} />
      <Stack.Screen name="EditProduct" component={EditProduct} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

export type DefaultNavigationProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
