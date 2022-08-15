import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView, Touchable,TouchableOpacity} from 'react-native';
// import Weather from './src/components/Weather';
import Search from './src/components/Search';
import Display from './src/components/Display';
import React, { useState } from 'react';
import {theme_light,theme_dark,container_theme_dark,container_theme_light} from './src/common/theme';
global.dark_theme=true;
// const [theme, setTheme] = useState(true);
// function changeTheme(){
//   if(theme===true){
//     setTheme(false);
//   } else{
//     setTheme(true);
//   }
//   console.log(theme);
// }
function changeTheme(){
  if(dark_theme===true){
    dark_theme=false;
  }else{
    dark_theme=true;
  }
  console.log(dark_theme);
}

export default function App() {
  return (
    <View style={[styles.container, (dark_theme==true) ? styles.container_theme_dark : styles.container_theme_light]}>
    <Text style={[styles.title, (dark_theme==true) ? styles.theme_dark : styles.theme_light]}>Shakil's Weather</Text>

    {/* <TouchableOpacity 
      style={[styles.theme_button, (dark_theme==true) ? styles.theme_dark : styles.theme_light]} 
      onPress={changeTheme}
      activeOpacity={.85}>
      <Text style={[(dark_theme==true) ? styles.theme_dark : styles.theme_light]}>{dark_theme==true ? 'Dark':'Light'}</Text>
    </TouchableOpacity> */}

    <Search/>

    </View>
  );
}
const styles = StyleSheet.create({
  theme_dark,
  theme_light,
  container_theme_dark,
  container_theme_light,
  container: {
    backgroundColor:'rgba(255, 242, 242,1)',
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
    // margin:5,
    // borderRadius:10,
  },
  title:{
    marginTop:40,
    fontSize:30,
    fontWeight:'bold',
    color:'#20232a',
    marginBottom:10,
  },
  theme_button:{
    width:100,
    height:40,
    backgroundColor:'#447AFF',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom:10,
  },

});
