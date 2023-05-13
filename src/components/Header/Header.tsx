import {GlobalSvgSelector} from '../../assets/icon/global/GlobalSvgSelector';
import  Select  from 'react-select'
import s from './Header.module.scss';
import {changeCity, setOpenModal} from '../../app/slices/WeatherSlice';
import { useDispatch } from 'react-redux';
import {useState} from 'react'

interface Props {
    
}

export const Header = (props: Props) => {


    const dispatch = useDispatch();
    const options = [
        { value: 'Kyiv', label: 'Киев' },
        { value: 'Lviv', label: 'Львов' },
        { value: 'Dnipro', label: 'Днепр' }
      ]

      const colourStyles = {
        control: (styles:any) => ({ ...styles, 
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 10,
        })}
  
    const changeValue = (v:any) => {
        dispatch(changeCity(v.value))            
    }  

    const openModal = () => {
        dispatch(setOpenModal())
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id='header__logo'/></div>
                <a onClick={openModal} className={s.title}>Weather</a>
            </div>
            <div className={s.wrapper}>
            <div className={s.change__theme}><GlobalSvgSelector id='change__theme'/></div>
            <Select onChange={(v) =>changeValue(v)}  styles={colourStyles} options={options} />
            </div>
        </header>
    )
}
