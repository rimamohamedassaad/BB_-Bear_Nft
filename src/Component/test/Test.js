import React from 'react'
// import Brand from './images/NFT Fashion Brand.png'
// import rockHuge from './images/flying earth 1.png'
import backgroudImg from '../../images/spell 2.png'
import backgroudImg1 from '../../images/newbackg.png';
import bear from '../../images/beat 1.png'
import earth from '../../images/flying earth 1.png'
import rock1 from '../../images/rock2 1.png'
import rock2 from '../../images/rock 3.png'
import backlinear1 from '../../images/Property 1=1.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import './test.css'
export const Test = () => {
    Aos.init({
        duration: 2000,
        offset: 300,
    });
    return (
        <div className='section'>
            <div className='imagesWrapper1'>
                <div className='ejbari'>
                    <img src={backlinear1} alt='background' className='backlinear1' />
                    <img src={backgroudImg} alt='background' className='backgroudImg1' />
                </div>
                {/* <img src={backlinear1} alt='background' className='backlinear11' /> */}

                <img src={bear} alt='bear' className='bear1'  />
                <img src={earth} alt='bear' className='earth1' data-aos="fade-up" />
                <img src={rock1} alt='rock1' className='rock11' />
                <img src={rock1} alt='rock2' className='rock21' />
                <img src={rock2} alt='rock3' className='rock31' />
            </div>
        </div>
    )
}
