import {useHttp} from './useHttp';
import {useSelector} from 'react-redux'

const useWeather = () => {
    const {loading, request, error} = useHttp();
    const {city} = useSelector(state => state.weather)

    const _apiBase = 'https://api.openweathermap.org/data/2.5/';
    const _apiKey = 'appid=a28be3b2b3e37cae4c7949a21d1f2d35';

    let lat 
    let lon
     if( city === 'Kyiv'){
         lat = 50.4333
         lon = 30.5167
     } else if (city === 'Lviv'){
         lat = 49.8383
         lon = 24.0232
     } else if (city === 'Dnipro'){
         lat = 48.45
         lon = 34.9833
     }

   
    const getWeatherDays = async () => {
        const res = await request(`${_apiBase}onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,current,hourly&${_apiKey}&lang=ru&units=metric`);
        return res.daily.map(_transformWeatherDays);
    }
  
    const getWeather = async () => {
        const res = await request(`${_apiBase}weather?q=${city}&${_apiKey}&lang=ru&units=metric`);
        return _transformWeather(res);
    }

    const _transformWeather = (data) => {
        return {
            temp: data.main.temp, 
            city: data.name,
            tempDeskr: data.main.feels_like,
            pressure: data.main.pressure,
            precipitation: data.weather[0].description,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            imgName: data.weather[0].main
        }
    }

    const _transformWeatherDays = (days) => {
        return {
            data: days.dt,
            temp: days.temp.day,
            tempFeels: days.feels_like.day,
            tempnight: days.temp.night,
            imgName: days.weather[0].main,
            descr: days.weather[0].description,
            pressure: days.pressure,
            wind: days.wind_speed,
            humidity: days.humidity,
        }
    }

    return {getWeather, getWeatherDays, loading, error}
}

export default useWeather;