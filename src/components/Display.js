import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Theme from '../common/theme';
export default function App(props) {
    console.log(typeof(props));
    // console.log(props.weather.sys.country);
    // let city=props.weather.name;
    // let time=new Date().toLocaleTimeString({hour12: true});
    // // let time=props.weather.time;
    // let weather=props.weather.weather;
    // let temp=props.weather.main.temp;
    // let temp_min=props.weather.main.temp_min;
    // let temp_max=props.weather.main.temp_max;
    // let feelsLike=props.weather.main.feels_like;
    // let humidity=props.weather.main.humidity;
    // let pressure=props.weather.main.pressure;
    // let wind=10;
    // let indexUv=10;
    // let sunrise=10;
    // let sunset=10;
    // let country=props.weather.sys.country;


    let city='dhaka';
    let time='Monday, 15 Aug';
    let weather='haze';
    let temp=10;
    let temp_min=40;
    let temp_max=50;
    let feelsLike=60;
    let humidity=70;
    let pressure=80;
    let wind=90;
    let indexUv=100;
    let sunrise=110;
    let sunset=120;
    let country='Bangladesh';

  return (
    <View style={styles.container}>
    <Text style={[styles.title_display_text , (dark_theme==true) ? styles.Theme.theme_dark : styles.Theme.theme_light]}>
    { city.charAt(0).toUpperCase()+city.slice(1)},{country.charAt(0).toUpperCase()+country.slice(1)}
    </Text>
    <View style={styles.display_main}>
        <View style={styles.weather_icon}>
        <Ionicons name="sunny" size={80} color="orange" />
        </View>
        <View>
            <Text style={styles.weather_info}>
            {weather.charAt(0).toUpperCase()+weather.slice(1)}
            </Text>
            <Text style={styles.weather_time}>{time}</Text>
            <Text style={styles.temp_text}>{temp}°C</Text>
        </View>



        <View style={styles.bottom_card_container}>
            <View style={styles.bottom_card1}>
                <View style={styles.small_card_icon}>
                <Feather name="wind" size={24} color="white" />
                </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Wind</Text>
                    <Text style={styles.small_card_text}>{wind}km/s</Text>
                </View>
            </View>
            <View style={styles.bottom_card2}>
            <View style={styles.small_card_icon}>
            <FontAwesome5 name="temperature-low" size={24} color="white" />
            </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Feels Like</Text>
                    <Text style={styles.small_card_text}>{feelsLike}°C</Text>
                </View>
            </View>
        </View>
        <View style={styles.bottom_card_container}>
            <View style={styles.bottom_card1}>
                <View style={styles.small_card_icon}>
                <Feather name="sun" size={24} color="white" />
                </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Index Uv</Text>
                    <Text style={styles.small_card_text}>{indexUv}</Text>
                </View>
            </View>
            <View style={styles.bottom_card2}>
            <View style={styles.small_card_icon}>
            <MaterialCommunityIcons name="air-humidifier" size={24} color="white" />
            </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Humidity</Text>
                    <Text style={styles.small_card_text}>{humidity}%</Text>
                </View>
            </View>
        </View>
    </View>
    <View>
        <Text style={[styles.title_display_text , (dark_theme==true) ? styles.Theme.theme_dark : styles.Theme.theme_light]}>Today</Text>
        <View style={styles.display_secondary}>
        <Feather name="wind" size={84} color="white" />
        </View>
    </View>
    </View>
  );
}
let bgColor='#447AFF';
const styles = StyleSheet.create({
    Theme,
  container: {
    // flex: 1,
    // height:'80%',
    width: '100%',
    // backgroundColor:'skyblue',
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

    display_main:{
        color :'white',
        width:'100%',
        // height:'70%',
        textAlign:'center',
        backgroundColor:bgColor,
        borderRadius:10,
        marginBottom:10,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    title_display_text:{
        color :'black',
        fontSize:20,
        textAlign:'left',
        paddingVertical:10,
    },
    weather_icon:{
        width:100,
        height:100,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        // padding:10,
        marginTop:50,
    },

    weather_info:{
        textAlign:'center',
        fontSize:40,
        color :'white',
    },
    weather_time:{
        textAlign:'center',
        // fontSize:15,
        color :'white',
    },
    temp_text:{
        paddingTop:10,
        textAlign:'center',
        fontSize:70,
        color :'white',
    },
    bottom_card_container:{
        // flex:1,
        flexDirection:'row',
        borderColor:bgColor,
        borderTopColor:'skyblue',
        borderWidth:1,
        // marginTop:40,
        borderRadius:20,
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
        height:80,
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bottom_card1:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:bgColor,
        borderRightWidth:.5,
        borderColor:'skyblue',
        height:'100%',
        width:'50%',
        borderBottomLeftRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_card2:{
        flexDirection:'row',
        backgroundColor:bgColor,
        borderLeftWidth:1,
        borderColor:'skyblue',
        height:'100%',
        width:'50%',
        borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    small_card_icon:{
        width:40,
        height:40,
        margin:10,         
        alignItems: 'center',
        justifyContent: 'center',
},
    small_card_text:{color:'white',fontSize:18,textAlign:'center',},
    display_secondary:{
        color :'white',
        width:'100%',
        height:100,
        textAlign:'center',
        // backgroundColor:'skyblue',
        borderRadius:20,
        marginBottom:10,
        alignItems: 'center',
        backgroundColor:bgColor,
        // marginTop:10,
        justifyContent: 'center',
    },
});
