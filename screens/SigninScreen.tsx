/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */

import React,{useState} from 'react';
import {Image,StyleSheet,View,Alert} from 'react-native';
import CustomButton from '../Custom/CustomButton';
import CustomInput from '../Custom/CustomInput';

const SigninScreen =({navigation}:{navigation:any})=>{
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const onPressLogin=()=>{
let request={username:username,password:password};
Alert.alert('thông báo','xin chào'+request.username,[
    {
text:'Cancel',
onPress:()=>console.log('Cancel Pressed'),
style:'cancel',
    },
    {text:'OK',onPress:()=>console.log('OK Pressed')},
]);
};
const navigateToHome=()=>{
    navigation.navigate('Home');
};
return(
    <View  style={styles.root}>
        <Image source={require('../assets/images/Flash.png')} style={styles.logo}/>
        <CustomInput placeholder='Username'  />
        <CustomInput placeholder='Password'  />
        <CustomButton title='Sign In' onPress={onPressLogin} />
<CustomButton title='back to home' onPress={navigateToHome} />
    </View>
);
};
export default SigninScreen;

const styles=StyleSheet.create({
root:{
    alignItems:'center',
    padding:20,
},
logo:{
    width:200,
    height:200,
    resizeMode:'contain',
},
});