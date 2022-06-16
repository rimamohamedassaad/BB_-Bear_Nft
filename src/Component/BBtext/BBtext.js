import React from 'react'
import './BBtext.css'
import Aos from "aos";
import 'aos/dist/aos.css';
export const BBtext = () => {
  Aos.init({
    duration: 3000,
    offset: 300,
});
  return (
    <div className='BBtextContainer' data-aos="fade-up" >
      <div><p className='titleContainer'><span className='brandIcon'>BB BEAR </span> <span className='brandIconP'>COLLECTION</span></p>
      </div>
      <div className='textBrand'>
        <p> BB BEAR is a collection of NFTs created by a group of imaginative designers, bringing a unique 110 initial NFT collection. Our HODLERS will have the opportunity to monetize their NFT and generate income through our partnerships.  </p>
      </div>
    </div>
  )
}
