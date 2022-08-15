import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useWeather from '../hooks/useWeather';

export default function Weather(city){
    const [{data,loading,error},searchWeather] = useWeather(city);
    // useEffect(()=>{
    //     searchWeather(city);
    // },[]);
    // console.log({data,loading,error});
    return (
        <View style={styles.container}>
        <Text>{data}{console.log(data,loading,error)}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });