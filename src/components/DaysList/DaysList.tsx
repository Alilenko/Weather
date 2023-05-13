import DaysListItem from '../DaysListItem/DaysListItem';
import './DaysList.scss';
import {useSelector} from 'react-redux'
import Spinner from '../Spinner/Spinner';


export interface Days {
    data: number,
    imgName: string,
    temp: number,
    tempnight: number,
    tempFeels: number
    descr: string,
    humidity: number,
    pressure: number,
    wind: number
}

interface RootState {
    weather: any,   
}

const DaysList = () => {

    const selectIsOn = (state: RootState) => state.weather
    const {weatherDays, loading} = useSelector(selectIsOn)

    
    return (
        <div className='days-list'>
            { !loading ?
                weatherDays.map((day: Days) => (
                    <DaysListItem day={day} key={day.data}/>
                )): <Spinner/>
            }
        </div>
    )
}

export default DaysList;
