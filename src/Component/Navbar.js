import React from 'react'
import logo from '../images/bibfy logo 1.png'
import './navbar.css'
import facebook from '../images/XMLID_835_.png'
import insta from '../images/Frame 39678.png'
import twiter from '../images/XMLID_827_.png'
import discord from '../images/Vector.png'
import logo1 from '../images/bb bear logo 1.png'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar'>
                <div className='navbarContent'>
                <div>
                    <img src={logo1} alt='logo' className='logo' />
                </div>
                <div className='linkContent'>
                    <a href="mint" >Mint</a>
                    <a href="mint" >Roadmap</a>
                    <a href="mint" >Contact us</a>
                </div>
                </div>
                <div  className='navbarContent'>
                <div className='socialMediaContent'>
                    <a href='#twiter' className='socialMedia'><img src={twiter} alt='twiter' /> </a>
                    <a href='#insta' className='socialMedia'><img src={insta} alt='insta' /> </a>
                    <a href='#discord' className='socialMedia'><img src={discord} alt='discord' /> </a>
                </div>
                <div>
                    <button className='connect'>connect</button>
                </div>
                </div>
            </div>

        </div>
    )
}
