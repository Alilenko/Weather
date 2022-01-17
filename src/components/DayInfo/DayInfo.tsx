
import s from './DayInfo.module.scss';
import cloud from '../../assets/img/cloud.png'
import { DayInfoItem } from '../DayInfoItem/DayInfoItem';
import {useSelector} from 'react-redux'
import Spinner from '../Spinner/Spinner';



export interface Item {
    id: string,
    name: string,
    value: any
}
interface RootState {
    weather: any,   
}

export const DayInfo = () => {
    
    const selectIsOn = (state: RootState) => state.weather
    const {weatherDay, loading} = useSelector(selectIsOn)
    const {temp, wind, pressure, tempDeskr, humidity} = weatherDay;

    const item =[
        {
            id: 'temp',
            name: 'Температура',
            value: `${temp}° - ощущается как ${tempDeskr}°`
        },
        {
            id: 'pressure',
            name: 'Давление',
            value: `${pressure} мм ртутного столба`
        },
        {
            id: 'precipitation',
            name: 'Осадки',
            value: `Вероятность осадков ${humidity}%`
        },
        {
            id: 'wind',
            name: 'Ветер',
            value: `${wind} м/с `
        }
    ]

    return (
        <div className={s.day__info}>
            { loading ? <Spinner/> :
                item.map((item: Item) => 
                    <DayInfoItem item={item} key={item.id}/>
                )
            }
            <img className={s.info__img} src={cloud} alt='cloud' />
        </div>
    )
}
