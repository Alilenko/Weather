import React from 'react';
import './Modal.scss';
import {useDispatch} from 'react-redux'
import {setOpenModal} from '../../app/slices/WeatherSlice'

const Modal = ({open, children}) => {
    const dispatch = useDispatch()

    let clazz = open ? 'modal active' : 'modal' 

    const handleModal = () => {
        dispatch(setOpenModal())
    }

  return (
        <div onClick={handleModal} className={clazz}>
            <div onClick={(e) => e.stopPropagation()} className='modal__body'>
                {children}
            </div>
        </div>
  )};

export default Modal;

