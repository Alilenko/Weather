import React from 'react'
import spinner from '../../assets/svg/spinner.svg'

const Spinner = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={spinner} alt='spinner'/>
        </div>
    )
}

export default Spinner;
