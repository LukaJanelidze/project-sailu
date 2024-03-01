import './Slick.css';
import './Slick-theme.css';
import './SimpleSlider.css'
import PicturesForCarouselOne from './../../PicturesForCarousel/PicturesForCarouselOne.jpg'
import PicturesForCarouselTwo from './../../PicturesForCarousel/PicturesForCarouselTwo.jpg'
import PicturesForCarouselThree from './../../PicturesForCarousel/PicturesForCarouselThree.jpg'
import PicturesForCarouselFour from './../../PicturesForCarousel/PicturesForCarouselFour.jpg'
import PicturesForCarouselFive from './../../PicturesForCarousel/PicturesForCarouselFive.jpg'
import PicturesForCarouselSix from './../../PicturesForCarousel/PicturesForCarouselSix.jpg'
import PicturesForCarouselSeven from './../../PicturesForCarousel/PicturesForCarouselSeven.jpg'
import PicturesForCarouselEight from './../../PicturesForCarousel/PicturesForCarouselEight.jpg'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function SimpleSlider() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      initialSlide: 0,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <div className='carousel-section'>
      <h2>For blue chips</h2>

      <hr />

        <div className='carousel'>
        <Slider {...settings}>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselOne } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselTwo } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselThree } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselFour } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselFive } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselSix } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselSeven } alt="" /></Link>
        </div>
        <div className='carousel-div'>
          <Link to="/" className='carousel-div-links'><img src={ PicturesForCarouselEight } alt="" /></Link>
        </div>
      </Slider>
      </div>

    </div>
    
  );
}