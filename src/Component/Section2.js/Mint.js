import React from 'react'
import './Mint.css'
import backbear from '../../images/backbear.png'
import bear1 from '../../images/60.png'
import orange from '../../images/45 (1).png'
import bear2 from '../../images/3.png'
// import HorizontalScroll from 'react-scroll-horizontal'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'bootstrap'
export const Mint = () => {
    const child = { width: ``, height: `100%` }
    const parent = { width: `60px`, height: `100%` }
    return (
        <div className='MintContainer'>
            <Carousel>
                <Carousel.Item>
                    <div className='mint1'>
                        <img src={backbear} className='backbear' alt='backbear' />
                        <img src={bear1} className='bear1' alt='bear1' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='mint1'>
                        <img src={backbear} className='backbear' alt='backbear' />
                        <img src={orange} className='bear1' alt='bear1' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='mint1'>
                        <img src={backbear} className='backbear' alt='backbear' />
                        <img src={bear2} className='bear1' alt='bear1' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
