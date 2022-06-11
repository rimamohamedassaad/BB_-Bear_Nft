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
import { Section4 } from './Component/section4/Section4';
import { Footer } from './Component/footer/Footer';
import { Mint } from './Component/Section2.js/Mint';
import { MintTest } from './Component/Section2.js/MintTest';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='section1'>
        <TestContainer />
      </div>

      <div className='section22'>
        <h1>
          mint your Bear
        </h1>
        <Mint />
        <div className='MintBtnSection'>
          <button className='exploreBtn'>Mint</button>
          <p>Hundred of unique and rare BB Bear are waiting for you !</p>
        </div>
      </div>
      <RoadMapImages />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
