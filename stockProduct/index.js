/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainPageNavigator from './src/route/RootRoute';
import {name as appName} from './app.json';
import { ProductProvider } from '@/component/ProductContext';

import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <MainPageNavigator />
      </NavigationContainer>
    </ProductProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
