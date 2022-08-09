import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src/components/Weather';
export default function App() {
  const [city,setCity] = useState('London');
  return (
    <View style={styles.container}>
      {/* <Weather city={city}/> */}
      <Text>'hello weather'</Text>
      <StatusBar style="auto" />
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
