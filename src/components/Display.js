import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,FlatList,Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import * as Theme from '../common/theme';
export default function App(props) {
// get cuttent time with day
let date = new Date();
let day = date.getDay();
let day_name = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day_name_current = day_name[day];
let month = date.getMonth();
let month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let month_name_current = month_name[month];
let date_current = date.getDate();
let time_current_day = day_name_current + ", " + date_current + " " + month_name_current + " ";
// console.log(time_current_day);
    let city;
    let time;
    let weather;
    let temp;
    let temp_min;
    let temp_max;
    let feelsLike;
    let humidity;
    let pressure;
    let wind;
    let indexUv;
    let sunrise;
    let sunset;
    let country;
    let weather_icon;
    let icon_link;

    if (props.weather.cod!=200){
        city='dhaka';
        time='Monday, 15 Aug';
        weather='haze';
        temp=10;
        temp_min=40;
        temp_max=50;
        feelsLike=60;
        humidity=70;
        pressure=80;
        wind=90;
        indexUv=100;
        sunrise=110;
        sunset=120;
        country='Bangladesh';
        weather_icon='50n';
        icon_link=`http://openweathermap.org/img/wn/${weather_icon}@2x.png`
        console.log(typeof(props.cod));
        console.log('if');
    } else{
        console.log(props.weather.cod);
        // console.log('Not Undefined and Not Null');
        // console.log(typeof(props));
        // console.log(props.weather.sys.country);
        city=props.weather.name;
        time=time_current_day;
        weather=props.weather.weather[0].main;
        temp=props.weather.main.temp;
        temp_min=props.weather.main.temp_min;
        temp_max=props.weather.main.temp_max;
        feelsLike=props.weather.main.feels_like;
        humidity=props.weather.main.humidity;
        pressure=props.weather.main.pressure;
        wind=props.weather.wind.speed;
        country=props.weather.sys.country;
        weather_icon=props.weather.weather[0].icon;
        icon_link=`http://openweathermap.org/img/wn/${weather_icon}@2x.png`
        // console.log(icon_link);
    }

  return (
    <View style={styles.container}>
    <Text style={[styles.title_display_text , (dark_theme==true) ? styles.Theme.theme_dark : styles.Theme.theme_light]}>
    { city.charAt(0).toUpperCase()+city.slice(1)},{country.charAt(0).toUpperCase()+country.slice(1)}
    </Text>
    <View style={styles.display_main}>
        <View style={styles.weather_icon}>
        {/* <Ionicons name="sunny" size={80} color="orange" /> */}
        <Image source={{uri:`http://openweathermap.org/img/wn/${weather_icon}@2x.png`, width:120,height:120 }}/>
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
                <MaterialCommunityIcons name="car-brake-low-pressure" size={24} color="white" />
                </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Pressure</Text>
                    <Text style={styles.small_card_text}>{pressure}</Text>
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
        {/* <Feather name="wind" size={84} color="white" /> */}


        <View style={styles.bottom_card_container2}>


            <View style={styles.bottom_card3}>

                <View style={styles.small_card_icon}>
            <FontAwesome5 name="temperature-low" size={24} color="white" />
            </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Min temp</Text>
                    <Text style={styles.small_card_text}>{temp_min}°C</Text>
                </View>
            </View>


            <View style={styles.bottom_card4}>
            <View style={styles.small_card_icon}>
                <FontAwesome5 name="temperature-high" size={24} color="white" />
                </View>
                <View style={styles.small_card_text}>
                    <Text style={styles.small_card_text}>Max temp</Text>
                    <Text style={styles.small_card_text}>{temp_max}°C</Text>
                </View>
            </View>


        </View>
        </View>
    </View>
    {/* <Image source={{uri:`http://openweathermap.org/img/wn/${weather_icon}@2x.png`, width:200,height:200 }}/> */}
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
        // backgroundColor:'rgba(0,0,0,0.3)',
        // backgroundColor:'rgba(255,150,20,1)',
        backgroundColor:'orange',
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
        marginBottom:30,
        alignItems: 'center',
        backgroundColor:bgColor,
        // marginTop:10,
        justifyContent: 'center',
    },
    bottom_card3:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:bgColor,
        borderRightWidth:1,
        borderColor:'skyblue',
        height:'100%',
        width:'45%',
        // borderBottomLeftRadius:20,
        // borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_card4:{
        flexDirection:'row',
        backgroundColor:bgColor,
        borderLeftWidth:1,
        borderColor:'skyblue',
        height:'100%',
        width:'45%',
        // borderBottomRightRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius:50,
    },
    bottom_card_container2:{
        // flex:1,
        flexDirection:'row',
        borderColor:bgColor,
        // borderTopColor:'skyblue',
        borderWidth:1,
        // marginTop:40,
        borderRadius:20,
        height:80,
        width:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
