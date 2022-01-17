import DaysListItem from '../DaysListItem/DaysListItem';
import './DaysList.scss';
import {useSelector} from 'react-redux'
import Spinner from '../Spinner/Spinner';


export interface Days {
    data: any,
    imgName: string,
    temp: string,
    tempnight: string,
    descr: string,
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
