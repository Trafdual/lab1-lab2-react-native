/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Button} from 'react-native';
import React from 'react';

const HomeScreen=({navigation}:{navigation:any})=>{
    const navigtionToLogin = ()=>{
        navigation.navigate('Login');
    };
    return <Button title='go to login screen ' onPress={navigtionToLogin} />;   
};

export default HomeScreen;

