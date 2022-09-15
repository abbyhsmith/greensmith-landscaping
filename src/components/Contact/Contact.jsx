import React from 'react'
import './styles.scss'

const Contact = () => {
    return(
        <div className='contact section' id='contact'>
            <h2>Contact</h2>
            <ul className='contactInfo'>
                <li>
                    <a href='tel:+15852037011'>(585) 203-7011</a>
                </li>
                <li>
                    <a href="https://facebook.com/greensmithlandscaping" target="_blank">Facebook</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact