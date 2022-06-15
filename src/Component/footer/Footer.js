import React from 'react'
import './footer.css'
import discord from '../../images/Vector.png'
import facebook from '../../images/XMLID_835_.png'
import twiter from '../../images/XMLID_827_.png'
// import '../navbar.css'
export const Footer = () => {
    return (
        <div className='footerContainer'>
             <div className='linkContentFotter'>
                    <a href='#twiter' className='socialMediaF'><img src={twiter} alt='twiter' /> </a>
                    <a href='#facebook' className='socialMediaF'><img src={facebook} alt='insta' /> </a>
                    <a href='#discord' className='socialMediaF'><img src={discord} alt='discord' /> </a>
                </div>
                <div className='footerText'>
                    <p className='p1'>
                    Copyright BB BEAR, Inc. 2022. All Rights Reserved.
                    </p>
                    <p className='p2'>
                    Terms and condition
                    </p>
                </div>
        </div>
    )
}
