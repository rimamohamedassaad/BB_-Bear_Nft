import './App.css';
import { Navbar } from './Component/Navbar';
import { TestContainer } from './Component/test/TestContainer/TestContainer';
import { RoadMapImages } from './Component/RoadMapImages/RoadMapImages';
import { Section4 } from './Component/section4/Section4';
import { Footer } from './Component/footer/Footer';
import { Mint } from './Component/Section2.js/Mint';
import arrow from './images/Polygon 4.png'
import backlinear1 from './images/Property 1=1.png'
<style>
</style>
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='section1'>
        <TestContainer />
      </div>
      <div className='section22'>
        {/* <div style={{ textAlign: 'center' }}> <img src={arrow} alt='arrow' /></div> */}
        <Mint />
        {/* <div className='MintBtnSection'>
          <button className='exploreBtn'>Mint</button>
          <p>Hundred of unique and rare BB Bear are waiting for you !</p>
        </div> */}
      </div>
      <RoadMapImages />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
