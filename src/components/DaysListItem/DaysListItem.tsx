import './DaysListItem.scss';
import {Days} from '../DaysList/DaysList';
import {useDispatch} from 'react-redux';
import {showMoreInfoDay} from '../../app/slices/WeatherSlice'


interface Props {
  day: Days
}

const DaysListItem = ({day}: Props) => {

    const dispatch = useDispatch()

    let date = new Date( day.data * 1000 );
    let d = date.getDate()
    let month=new Array(12)
    month[0]="Января";
    month[1]="Февраля";
    month[2]="Марта";
    month[3]="Апреля";
    month[4]="Мая";
    month[5]="Июня";
    month[6]="Июля";
    month[7]="Августа";
    month[8]="Сентября";
    month[9]="Октября";
    month[10]="Ноября";
    month[11]="Декабря";
    let m = month[date.getMonth()]
    
    let dayWeek=new Array(7)
    dayWeek[0]="Воскресенье";
    dayWeek[1]="Понедельник";
    dayWeek[2]="Вторник";
    dayWeek[3]="Среда";
    dayWeek[4]="Четверг";
    dayWeek[5]="Пятница";
    dayWeek[6]="Субота";
    let dw = dayWeek[date.getDay()]

    const tempDay = Math.round(+(day.temp))
    const tempNight = Math.round(+(day.tempnight))

    let imgWeather 
    if(day.imgName === 'Snow'){
        imgWeather = 'http://openweathermap.org/img/wn/13d@2x.png'
    } else if (day.imgName === 'Clouds'){
        imgWeather = 'http://openweathermap.org/img/wn/04d@2x.png'
    } else if (day.imgName === 'Rain'){
        imgWeather = 'http://openweathermap.org/img/wn/09d@2x.png'
    }else {
        imgWeather = 'http://openweathermap.org/img/wn/02d@2x.png'
    }
  
    const handleMoreInfo = (one:number) => {
        dispatch(showMoreInfoDay(one))

        
    }

    return (
        <div onClick={() => handleMoreInfo(day.data)} className='days_item'>
            <div className='days_name'>{dw}</div>
            <div className='days_data'>{d} {m}</div>
            <div className='days_img'><img src={imgWeather} alt={day.imgName}/></div>
            <div className='days_max'>{tempDay}°</div>
            <div className='days_min'>{tempNight}°</div>
            <div className='days_descr'>{day.descr}</div>
    </div>
    )
}


export default DaysListItem

