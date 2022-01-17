import s from './ThisDay.module.scss'
import {useSelector} from 'react-redux'
import Spinner from '../Spinner/Spinner'

interface RootState {
    weather: any,   
}

 const ThisDay = () => {
    const selectIsOn = (state: RootState) => state.weather
    const {loading} = useSelector(selectIsOn)

    return (
        <div className={s.this__day}>
            {!loading ? <View /> : <Spinner/>}
        </div>
    )
}

const View = () => {
    const selectIsOn = (state: RootState) => state.weather
    const {weatherDay} = useSelector(selectIsOn)
    const {temp, city, imgName} = weatherDay
    const tempNum = Math.round(temp)

    let imgWeather 
    if(imgName === 'Snow'){
        imgWeather = 'http://openweathermap.org/img/wn/13d@2x.png'
    } else if (imgName === 'Clouds'){
        imgWeather = 'http://openweathermap.org/img/wn/04d@2x.png'
    } else if (imgName === 'Rain'){
        imgWeather = 'http://openweathermap.org/img/wn/09d@2x.png'
    }else {
        imgWeather = 'http://openweathermap.org/img/wn/02d@2x.png'
    }

    return (
        <>
        <div className={s.this__block}>
        <div className={s.this__wraper}>
            <div className={s.temp}>{tempNum}°</div>
            <div className={s.day}>Сегодня</div>
        </div>
        <img src={imgWeather} alt={imgName}/>
    </div>
    <div className={s.this__block}>
    <div className={s.this__wraper}>
        <div className={s.time}>Время: <span>{new Date().toLocaleTimeString().slice(0,-3)}</span></div>
        <div className={s.city}>Город: <span>{city}</span></div>
        </div>
    </div>
    </>
    )
}
export default ThisDay
