import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import Display from '../components/Display';
import { StyleSheet, Text, View,TextInput, Touchable,TouchableOpacity,ScrollView, } from 'react-native';
import {theme_light,theme_dark,container_theme_dark,container_theme_light,placeholderTextColor_light,placeholderTextColor_dark} from '../common/theme';
let height=40;
// function changeTheme(){
//   console.log(dark_theme);
//   if(dark_theme===false){
//     dark_theme=true;
//   }else{
//     dark_theme=false;
//   }
// }

export default function Search() {
  const [text, setText] = useState('Dhaka');
  const [data, setData] = useState('');

  function fetchdata(city = 'dhaka') {
    let unit = "metric";
    if(city && 'dhaka')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=398e310b24f291b753fabdb60b31cc14`)
    .then(res=>res.json())
    .then(data=>setData(data))
  };
  useEffect(() => {
    fetchdata('dhaka');
  }, []);

  return (
    <ScrollView
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false} 
    >
    <View style={[styles.container]}>
      <View style={[styles.search, (dark_theme==true) ? styles.theme_dark : styles.theme_light]}>
      <TextInput style={[styles.input, (dark_theme==true) ? styles.theme_dark : styles.theme_light]} 
        placeholderTextColor={(dark_theme==true) ? 'white' : 'black'}
        placeholder="Enter City Name To Search" 
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      </View>
      <TouchableOpacity style={[styles.button, (dark_theme==true) ? styles.theme_dark : styles.theme_light]} onPress={() => fetchdata(text)} activeOpacity={.85}>
      <Text style={[styles.search_text, (dark_theme==true) ? styles.theme_dark : styles.theme_light]}>search</Text>
      </TouchableOpacity>
      {/* <Text>{text}</Text> */}
    </View>
      <Display weather={data}/>
   </ScrollView>
  );
  
}
const styles = StyleSheet.create({
  theme_dark,
  theme_light,
  container_theme_dark,
  container_theme_light,
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
    width:'75%',
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
