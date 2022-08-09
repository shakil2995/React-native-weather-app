import axios from 'axios';
export default axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/',
    // headers:{
    //     Authorization:"appid 398e310b24f291b753fabdb60b31cc14",
    // }
});