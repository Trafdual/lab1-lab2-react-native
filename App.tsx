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

const App=()=>{
const [showCard, setshowCard]= useState(true);

const changeShowCard=() =>{
  setshowCard(!showCard);
};
let imgUrl={
  uri:'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/273219677_630577914907680_8040586880275935717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sKsre9uy3TkAX-g4gQD&_nc_ht=scontent.fhan14-2.fna&oh=00_AfD3cYQrcwYebWDwLyiR5WQL1aq-A3mGfqmZzLRpwMC3SQ&oe=64676552',
}
  return(
    <View style={styles.container}>
      <Text style={[styles.fontBold,styles.red]}>MD18101</Text>
      <Text style={[styles.fontSemibold,styles.blue]}>Nguyễn Hoàng Trà</Text>
      <Text style={[styles.fontSemibold,styles.black]}>PH26979</Text>
      <Text>Chạy ứng dụng react native thành công</Text>
           {showCard ? (
      <Card title="Sample pass props to component" imgUrl={imgUrl}/>
     ) : null} 
     <Button title="Hide/Show CardComponent" onPress={changeShowCard}/>
    </View>
  )
}



export default App;
