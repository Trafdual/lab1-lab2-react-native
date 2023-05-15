/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable react/self-closing-comp */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CardProps } from "./CardProp";

const Card=(props: CardProps) =>{
    return(
<View>
<Text style={styles.title}>
    {props.title}
</Text>
<Image source={props.imgUrl} style={styles.image}/>
</View>
    );
};
export default Card;

const styles= StyleSheet.create({
title:{
textAlign:'center',
fontSize:20,
fontWeight:'bold',
},
image:{
    height:250,
    resizeMode:'cover',
},
});