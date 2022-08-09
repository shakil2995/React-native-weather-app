import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView} from 'react-native';
import Weather from './src/components/Weather';
import Search from './src/components/Search';
import Display from './src/components/Display';
export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Shakil's Forecast</Text>
    <Search/>
    <ScrollView style={styles.display_scroll}>
      <Display/>
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
  }
});
