import React from 'react'
import './styles.scss'

const Contact = () => {
    return(
        <div className='contact section' id='contact'>
            <h1>Contact</h1>
            <ul className='contactInfo'>
                <li>
                    <tel>(585) 203-7011</tel>
                </li>
                <li>
                    <a href="https://facebook.com/greensmithlandscaping" target="_blank">Facebook</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact