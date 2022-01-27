/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import MainScreen from "./src/screens/MainScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";
import { Colors } from './src/styles/Colors';
import Store from './src/context/Store';

const Stack = createStackNavigator();

const App = () => {

  //close splashscreen
  setTimeout(() => {
    SplashScreen.hide();
  }, 1000);
  
  return (
    <Store>
      <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content"/>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
};

export default App;
