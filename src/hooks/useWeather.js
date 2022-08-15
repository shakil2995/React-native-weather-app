import { useState } from "react";
// import weather from '../api/weatherApi';
export default()=>{
const [weather,setWeather]= useState({
    data:null,
    loading:false,
    error:null
});
    const searchWeather = async (city) => {
        setWeather({
          data:null,
          loading:true,
          error:null
        });
        try {
          let response = await weather.get('/weather',{
            params:{
              q:'dhaka',
              appid:'398e310b24f291b753fabdb60b31cc14',
            }
          });
          setWeather({
            data:response.data.main,
            loading:false,
            error:null
          });
        }catch(error){
          setWeather({
            data:null,
            loading:false,
            error:error
          });
        }
      };
      return [weather,searchWeather]
};