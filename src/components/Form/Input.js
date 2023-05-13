import React from 'react';
import './input.scss'
import {  useField } from 'formik';

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className='input__wrapper'>
        <label htmlFor={props.name}>{label}</label>
        <input className={meta.touched && meta.error ? 'err' : null} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
};

export default Input;
