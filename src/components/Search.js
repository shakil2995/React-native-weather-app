import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput  } from 'react-native';
let height=40;
export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
      <TextInput style={styles.input} placeholder="Enter City Name To Search" />
      </View>
      <Text style={styles.search_text}>search</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // borderColor:'black',
    // borderWidth:1,
    // flex: 1,
    flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center'
    marginBottom:20,
  },
  search:{
    width:'60%',
    height:height,
    borderRadius:20,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    borderWidth: 1,
    borderColor: "#20232a",
    // alignItems:'center',
    justifyContent:'center'
  },
  search_text:{
    fontSize:20,
    color:'#20232a',
    textAlign:'center',
    width:'30%',
    height:height,
    borderRadius:20,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderWidth: 1,
    borderLeftWidth:0,
    borderColor: "#20232a",
    backgroundColor:'#447AFF',
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:5,
    },
    input:{
        paddingLeft:15,

    }
});
