import React from 'react'
import './Mint.css'
import backbear from '../../images/backbear.png'
import bear1 from '../../images/60.png'
import orange from '../../images/45 (1).png'
import bear2 from '../../images/3.png'
export const Mint = () => {
    return (
        <div className='MintContainer'>
            <div className='mint1'>
                <img src={backbear} className='backbear' alt='backbear' />
                <img src={bear1} className='bear1' alt='bear1' />
            </div>
            <div className='mint1'>
                <img src={backbear} className='backbear' alt='backbear' />
                <img src={orange} className='bear1' alt='bear1' />
            </div>
            <div className='mint1'>
                <img src={backbear} className='backbear' alt='backbear' />
                <img src={bear2} className='bear1' alt='bear1' />
            </div>
        </div>
    )
}