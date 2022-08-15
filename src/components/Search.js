import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Touchable,TouchableOpacity  } from 'react-native';
let height=40;
    
function fetchdata(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=398e310b24f291b753fabdb60b31cc14')
  .then(res=>res.json())
  .then(data=>console.log(data))
  return data;
}
const data=fetchdata();
console.log(data);
function printText(){
  console.log(global_light);
}

export default function Search() {
  const [text, setText] = useState('');
  return (
    <View style={[styles.container]}>
      <View style={[styles.search]}>
      <TextInput style={[styles.input]} placeholder="Enter City Name To Search" 
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      </View>
      <TouchableOpacity style={[styles.button]} onPress={printText} activeOpacity={.85}>
      <Text  style={[styles.search_text]}>search</Text>
      </TouchableOpacity>
      {/* <Text>{text}</Text> */}
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
    color:'white',
  },
  search:{
    width:'70%',
    height:height,
    borderRadius:20,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    borderWidth: 1,
    borderColor: "black",
    justifyContent:'center',
  },
  search_text:{
    opacity:1,
    fontSize:20,
    textAlign:'center',
    color:'white',
    borderColor: "black",
    backgroundColor:'#447AFF',
    height:height,
    borderRadius:20,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderWidth: 1,
    borderLeftWidth:0,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:5,
    },
    input:{
        paddingLeft:15,
        color:'white',
    },
  button:{
    width:'25%',
},
});
