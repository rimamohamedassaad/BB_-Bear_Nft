import React, { useEffect } from 'react'
import './Mint.css'
import backbear from '../../images/backbear.png'
import bear1 from '../../images/60.png'
import orange from '../../images/45 (1).png'
import bear2 from '../../images/3.png'
import 'react-alice-carousel/lib/alice-carousel.css'
import lineareback from '../../images/Property 1=1.png'
import Slider from "react-slick";
import Aos from "aos";
import 'aos/dist/aos.css';
import recttangle1 from '../../images/Rectangle 18035.png'
import rectangle2 from '../../images/Rectangle 18034.png'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export const Mint = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 300,
        });
        Aos.refresh();
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        className:'center',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className='container'>  <p className='roadmapH1'>find your bb bear</p>
            <div className='sliderContainer'>
                <Slider {...settings}>
                    <div className='mint1'>
                        <img src={lineareback} className='linearback' alt='linearback' />
                        <div className='backbear'>
                            <div className='backbear1'></div>
                            <img src={rectangle2} className='rectangle2' alt='backbear' />
                            <img src={recttangle1} className='rectangle1' alt='backbear' />
                            <span className='spanEth'>0.1 ETH</span>
    
                            <img src={bear1} className='bear1Mint' alt='bear1' />
                        </div>
                    </div>
                    <div className='mint1'>
                        <img src={lineareback} className='linearback' alt='linearback' />
                        <div className='backbear'>
                            <div className='backbear1'></div>
                            <img src={rectangle2} className='rectangle2' alt='backbear' />
                            <img src={recttangle1} className='rectangle1' alt='backbear' />
                            <span className='spanEth'>0.1 ETH</span>
    
                            <img src={orange} className='bear1Mint' alt='bear1' />
                        </div>
                        {/* <img src={backbear} className='backbear' alt='backbear' /> */}
                    </div>
                    <div className='mint1'>
                        <img src={lineareback} className='linearback' alt='linearback' />
                        <div className='backbear'>
                            <div className='backbear1'></div>
                            <img src={rectangle2} className='rectangle2' alt='backbear' />
                            <img src={recttangle1} className='rectangle1' alt='backbear' />
                            <span className='spanEth'>0.1 ETH</span>
    
                            <img src={bear2} className='bear1Mint' alt='bear1' />
                        </div>
                        {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                    </div>
                    {/* </Carousel> */}
                </Slider>
            </div>
            <div className='MintContainer'>
                <div className='mint1'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>

                        <img src={bear1} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
                <div className='mint1' data-aos="fade-up" data-aos-once='true' data-aos-offset='500'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>

                        <img src={orange} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
                <div className='mint1' data-aos="fade-up" data-aos-once='true' data-aos-offset='1000'>
                    <img src={lineareback} className='linearback' alt='linearback' />
                    <div className='backbear'>
                        <div className='backbear1'></div>
                        <img src={rectangle2} className='rectangle2' alt='backbear' />
                        <img src={recttangle1} className='rectangle1' alt='backbear' />
                        <span className='spanEth'>0.1 ETH</span>

                        <img src={bear2} className='bear1Mint' alt='bear1' />
                    </div>
                    {/* <img src={backbear} className='backbear' alt='backbear' />> */}
                </div>
            </div>
        </div>
    )
}
