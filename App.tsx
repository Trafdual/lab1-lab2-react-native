/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { Text,View, Button} from 'react-native';
import styles from './styles/mainStyle';
import Card from './card/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
const Stack=createNativeStackNavigator();
const App=()=>{
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen}  />
      <Stack.Screen name='Login' component={SigninScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>  
  );
}



export default App;
