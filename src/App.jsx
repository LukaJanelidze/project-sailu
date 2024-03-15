import { Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './assets/components/Header/Header';
import FirstSection from './assets/components/FirstSection/FirstSection';
import SecondSection from './assets/components/SecondSection/SecondSection';
import ThirdSection from './assets/components/ThirdSection/ThirdSection';
import FourthSection from './assets/components/FourthSection/FourthSection';
import SimpleSlider from './assets/components/SimpleSlider/SimpleSlider';
import PictureOne from './assets/PictureOne.jpeg';
import PictureTwo from './assets/PictureTwo.jpeg';
import PictureThree from './assets/PictureThree.jpeg';
import PictureFour from './assets/PictureFour.jpeg';
import PictureFive from './assets/PictureFive.jpeg';
import PictureSix from './assets/PictureSix.jpeg';
import './App.css';

function App() {
  return (
    <div className="sailu">
      <div className="first-picture-section">
        <img src={PictureOne} alt="" className="pictures" />
        <img src={PictureTwo} alt="" className="pictures" />
        <img src={PictureThree} alt="" className="pictures" />
      </div>

      <div className="second-picture-section">
        <img src={PictureFour} alt="" className="pictures" />
        <img src={PictureFive} alt="" className="pictures" />
        <img src={PictureSix} alt="" className="pictures" />
      </div>

      <div className="main">
        <Header />
        
        {/* Wrap Routes with TransitionGroup and use CSSTransition */}
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Routes>
              <Route path="/" element={<FirstSection />} />
              <Route path="secondsection" element={<SecondSection />} />
              <Route path="thirdsection" element={<ThirdSection />} />
              <Route path="fourthsection" element={<FourthSection />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <SimpleSlider />
    </div>
  );
}

export default App;
