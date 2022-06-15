import React from 'react'
import './Mint.css'
import backbear from '../../images/backbear.png'
import bear1 from '../../images/60.png'
import orange from '../../images/45 (1).png'
import bear2 from '../../images/3.png'
import 'react-alice-carousel/lib/alice-carousel.css'
import lineareback from '../../images/Property 1=1.png'

import recttangle1 from '../../images/Rectangle 18035.png'
import rectangle2 from '../../images/Rectangle 18034.png'

export const Mint = () => {
    return (
        <div className='container'><h1>
            mint your Bear
        </h1>
            <div className='MintContainer'>

                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>
                        <span className='spandolar'>= $251.59</span>
                        <img src={bear1} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>
                        <span className='spandolar'>= $251.59</span>
                        <img src={orange} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>
                        <span className='spandolar'>= $251.59</span>
                        <img src={bear2} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
            </div>
        </div>
    )
}
