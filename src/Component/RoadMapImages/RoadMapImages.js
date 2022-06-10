import React from 'react'
import './roadmapImages.css'
import atom from '../../images/atome.png'
import atome from '../../images/atom.png'
import smallrock from '../../images/smallRock.png'
import shadow from '../../images/shadowRock.png'
import cake from '../../images/cake.png'
import micro from '../../images/Vector (3).png'
import { RoadMap } from '../section3/RoadMap'
export const RoadMapImages = () => {
    return (
        <div className='imageRock'>
            <RoadMap/>
            <div className='image1'> 
             <div className='imageRockContainer1'>
                <div className='rectangle'>
                    <img src={atom} alt='atom' className='atom' />
                    <img src={atome} alt='atom' className='atome' />
                </div>
                <img src={shadow} alt='shadow' className='shadow' />
                <img src={smallrock} alt='smallrock' className='smallrock' />
            </div></div>
            <div className='image2'> <div className='imageRockContainer2'>
                <div className='rectangle'>
                    <img src={micro} alt='atom' className='micro' />
                </div>
                <img src={shadow} alt='shadow' className='shadow' />
                <img src={smallrock} alt='smallrock' className='smallrock' />
            </div></div>
            <div className='image3'> <div className='imageRockContainer3'>
                <div className='rectangle'>
                    <img src={cake} alt='atom' className='cake' />
                </div>
                <img src={shadow} alt='shadow' className='shadow' />
                <img src={smallrock} alt='smallrock' className='smallrock' />
            </div></div>
        </div>
    )
}
