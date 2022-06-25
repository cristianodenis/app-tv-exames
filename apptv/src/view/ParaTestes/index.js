// React
import React from "react";
// Aphrodite
//import { StyleSheet  } from "aphrodite";
import {View,Text,StyleSheet} from 'react-native';

export default function SimpleComponent() {
    return (
        <View>
           <Text style={style.link}> testando </Text>
        
           
        </View>
    );
};
const style = StyleSheet.create({
    link: {
      ':hover': {
        color: 'green'
      },
      color:'blue'
      
    },
  });

