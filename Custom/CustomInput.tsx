/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { InputProp } from './InputProp';
const CustomInput = (prop: InputProp) => {
 

  return (
    <View style={styles.container}>
      <TextInput 
      placeholder={prop.placeholder.toString()}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop:20,
  },
  input: {
    width: 400,
    height: 50,
    borderWidth: 2,
    borderColor: '#FF6600',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomInput;