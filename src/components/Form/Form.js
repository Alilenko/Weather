import React from 'react';
import Input from './Input';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import { useDispatch} from 'react-redux';
import {setOpenModal, setThanksModal} from '../../app/slices/WeatherSlice'

const CustomForm = () => {
    const dispatch = useDispatch()

    const submitForm = (values) => {
        console.log(JSON.stringify(values, null, 2))
        dispatch(setOpenModal())
        dispatch(setThanksModal())
        setTimeout(() => dispatch(setThanksModal()), 1500);
        values.name = ''
        values.email = ''
        values.tel = ''
    }


  return (
         <Formik
         initialValues = {{
             name: '',
             email: '',
             tel: ''
         }}
         validationSchema = {Yup.object({
             name: Yup.string()
                     .min(2, 'Минимум 2 символа для заполнения')
                     .required('Обязательное поле!'),
             email: Yup.string()
                     .email('Неправильный email адрес')
                     .required('Обязательное поле!'),
             tel: Yup.number()
                     .required('Обязательное поле!'),
         })}
         onSubmit = {values => submitForm(values)}
         >
             <Form className="form">
                 <h2>Регистрация</h2>
                 <Input
                     label="Ваше имя"
                     id="name"
                     name="name"
                     type="text"
                     autoComplete="off"
                 />
                 <Input
                     label="Ваша почта"
                     id="email"
                     name="email"
                     type="email"
                     autoComplete="off"
                 />
                <Input
                     label="Ваш номер телефона"
                     id="tel"
                     name="tel"
                     type="number"
                     autoComplete="off"
                 />
                 <Button type={'submit'} children={'Отправить'}/>
  
             </Form>
         </Formik>
  )
};

export default CustomForm;
