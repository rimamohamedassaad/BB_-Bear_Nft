import React from 'react'
import './roadmap.css'

export const RoadMap = () => {
    return (
        <div className='RoadmapContainer'>
            <div className=''>
                <p className='roadmapH1'>Roadmap</p>
            </div>
            <div className='roadmap_items_container'>
            <div className='roadmap_items'>
                <div className='icon_div'>
                    <div className='icon_div_div'>
                    </div>
                </div>
                <div className='roadmap_item'>

                    <p className='marketing'> Marketing . Marketing . Marketing</p>

                    <p className='marketingDesc'> Run intensive Ads to get the word out about the BiBiFy brand. </p>

                </div>
            </div>
            <div className='roadmap_items'>
                <div className='icon_div'>
                    <div className='icon_div_div'>
                    </div>
                </div>
                <div className='roadmap_item'>

                    <p className='marketing'>  Collaboration</p>

                    <p className='marketingDesc'> Collaborate with famous artists to utilize our platform to launch their collections.</p>

                </div>
            </div>
            <div className='roadmap_items'>
                <div className='icon_div'>
                    <div className='icon_div_div'>
                    </div>
                </div>
                <div className='roadmap_item'>

                    <p className='marketing'> Metaverse Stores</p>

                    <p className='marketingDesc'> Build our stores in the metaverse. <br />
                        Decentraland and SandBox.</p>

                </div>
            </div>
            </div>
        </div>
    )
}

