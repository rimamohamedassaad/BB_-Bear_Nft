import React from 'react'
import logo from '../../images/bibfy logo 1.png'
import logo1 from '../../images/bb bear logo 1.png'
import './Section4.css'
export const Section4 = () => {
    return (
        <div className='Section4Container'>
            <div className='section4Header'>
            <p className='roadmapH1'>Partnership</p>
            </div>
            <div className='section4Text'>
                <div className='section4TextImg'>
                    <img src={logo1} alt='logo' className='logoImg' />
                </div>
                <div className='section4TextP'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu eget odio elit aliquam proin duis convallis consectetur. Nisl laoreet nunc vel a.
                    </p>
                </div>
            </div>
        </div>
    )
}
