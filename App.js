import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView} from 'react-native';
import Weather from './src/components/Weather';
import Search from './src/components/Search';
import Display from './src/components/Display';
global.global_light={
  backgroundColor:'white',
  color:'black',
  borderColor:'black',
};
global.global_dark={
  backgroundColor:'black',
  color:'white',
  borderColor:'white',
};
export default function App() {
  return (
    <View style={[styles.container,styles.dark]}>
    <Text style={[styles.title,styles.dark]}>Shakil's Forecast</Text>
    <Search/>
    <ScrollView 
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false} 
    style={styles.display_scroll}>
      <Display
      // city='london'
      // time='Sunday, 02 Oct'
      // weather='sunny'
      />
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
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
  display_scroll:{
    width:'100%',
  },
  title:{
    marginTop:40,
    fontSize:30,
    fontWeight:'bold',
    color:'#20232a',
    marginBottom:10,
  },
  light:{
    backgroundColor:global_light.backgroundColor,
    color:global_light.color,
    borderColor:global_light.borderColor,
  },
  dark:{
    backgroundColor:global_dark.backgroundColor,
    color:global_dark.color,
    borderColor:global_dark.borderColor,
  }

});
