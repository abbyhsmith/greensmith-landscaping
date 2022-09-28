import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './styles.scss'

const BeforeAndAfterImages = () => {
    return(
        <div className='section' id='beforeAndAfterImages'>
            <h2>Before & After Images</h2>
            <Carousel infiniteLoop={true} className='carouselDiv' >
                <div>
                    <img src='../img/beforeandafter1.png' />
                </div>
                <div>
                    <img src='../img/beforeandafter2.png' />
                </div>
                <div>
                    <img src='../img/beforeandafter3.png' />
                </div>
            </Carousel>
        </div>
    )
}

export default BeforeAndAfterImages