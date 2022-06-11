import React from 'react'
import './Mint.css'
import backbear from '../../images/backbear.png'
import bear1 from '../../images/60.png'
import orange from '../../images/45 (1).png'
import bear2 from '../../images/3.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import lineareback from '../../images/Property 1=1.png'
export const Mint = () => {
    return (
        <div className='container'>
            <div className='MintContainer'>

                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <img src={backbear} className='backbear' alt='backbear' />
                    <img src={bear1} className='bear1Mint' alt='bear1' />
                </div>
                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />

                    <img src={backbear} className='backbear' alt='backbear' />
                    <img src={orange} className='bear1Mint' alt='bear1' />
                </div>
                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <img src={backbear} className='backbear' alt='backbear' />
                    <img src={bear2} className='bear1Mint' alt='bear1' />
                </div>
            </div>
        </div>
    )
}
