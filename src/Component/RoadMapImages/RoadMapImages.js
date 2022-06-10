import React from 'react'
import './roadmapImages.css'
import atom from '../../images/atome.png'
import atome from '../../images/atom.png'
export const RoadMapImages = () => {
    return (
        <div>
            <div>
                <div className='rectangle'>
                    <img src={atom} alt='atom' className='atom'/>
                    <img src={atome} alt='atom' className='atome'/>
                </div>
            </div>

        </div>
    )
}
