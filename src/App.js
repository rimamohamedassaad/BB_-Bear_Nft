import './App.css';
import { Navbar } from './Component/Navbar';
import Brand from './images/NFT Fashion Brand.png'
import rockHuge from './images/flying earth 1.png'
import backgroudImg from './images/spell 2.png'
import bear from './images/beat 1.png'
import earth from './images/flying earth 1.png'
import rock1 from './images/rock2 1.png'
import rock2 from './images/rock 3.png'
import { Test } from './Component/test/Test';
import { TestContainer } from './Component/test/TestContainer/TestContainer';
import { BBtext } from './Component/BBtext/BBtext';
import { RoadMap } from './Component/section3/RoadMap';
import { RoadMapImages } from './Component/RoadMapImages/RoadMapImages';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='section1'>
        {/* <TestContainer /> */}
        {/* <RoadMap/> */}
        <RoadMapImages />
      </div>
      {/* <Navbar />
      <div className='section1'>
        <div className='NFTBrand1'>
          <div className='section1Container'><p ><span className='brandIcon'>BB BEAR </span> <span className='brandIconP'>COLLECTION</span></p>
          </div>
          <div className='textBrand'>
            BB BEAR is a collection of NFTs created by a group of imaginative designers, bringing a unique 110 initial NFT collection. Our HODLERS will have the opportunity to monetize their NFT and generate income through our partnerships.          </div>
        </div>
        <div className='ImgContainer'>
          <Test />
        </div>
      </div> */}
    </div>
  );
}

export default App;
