import React from 'react'
import logo from '../images/bibfy logo 1.png'
import './navbar.css'
import facebook from '../images/XMLID_835_.png'
import twiter from '../images/XMLID_827_.png'
import discord from '../images/Vector.png'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar'>
                <div className='navbarContent'>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <div className='linkContent'>
                    <a href="mint" >mint</a>
                    <a href="mint" >Roadmap</a>
                    <a href="mint" >partner</a>
                </div>
                </div>
                <div  className='navbarContent'>
                <div className='linkContent'>
                    <a href='#twiter' className='socialMedia'><img src={twiter} alt='twiter' /> </a>
                    <a href='#facebook' className='socialMedia'><img src={facebook} alt='insta' /> </a>
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
