import { DayInfo } from '../../components/DayInfo/DayInfo'
import s  from './Home.module.scss'
import ThisDay  from '../../components/thisDay/ThisDay'
import DaysList from '../../components/DaysList/DaysList'
import useWeather from '../../app/services/useWeather';
import {useEffect} from 'react';
import {weatherLoaded, weatherLoading, weatherSevenDayLoaded} from '../../app/slices/WeatherSlice';
import {useDispatch, useSelector} from 'react-redux';


interface Props {
    
}
interface RootState {
    weather: any,   
}

export const Home = (props: Props) => {
    const { getWeather, getWeatherDays} = useWeather();
    const dispatch = useDispatch()
    const selectIsOn = (state: RootState) => state.weather
    const {city} = useSelector(selectIsOn)

    
    useEffect(() => {
       dispatch(weatherLoading())
       getWeather().then(loadedDay)
    }, [city])

    useEffect(() => {
        getWeatherDays().then(loadedSeven)
    }, [city])


    const loadedDay = (res:any) => {
        dispatch(weatherLoaded(res))
    }

    const loadedSeven = (res:any) => {
        dispatch(weatherSevenDayLoaded(res))
    }

    return (
        <div className={s.home} >
            <div className={s.block__top}>
            <ThisDay  /> 
            <DayInfo />
            </div>
            <DaysList/>
        </div>
    )
}
