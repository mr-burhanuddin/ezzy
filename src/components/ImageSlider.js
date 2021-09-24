import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import Expert from '../Images/gamer.png';
import Trained from '../Images/painter.png';
import Color from '../Images/artist (1).png';
import Site from '../Images/architect.png';
import Quality from '../Images/award.png';
import WholeSale from '../Images/package.png';

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider'>
      <h2 className='slider__heading'>
        Why Us <>🤔</>
      </h2>
      <Slider {...settings}>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img className='wrapContainer__img' src={Expert} alt='slider' />
              <h3 className='wrapContainer__Title'>Expert Advice</h3>
            </div>
          </div>
        </div>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img className='wrapContainer__img' src={Trained} alt='slider' />
              <h3 className='wrapContainer__Title'>Trained Painters</h3>
            </div>
          </div>
        </div>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img className='wrapContainer__img' src={Color} alt='slider' />
              <h3 className='wrapContainer__Title'>Colour Consultancy</h3>
            </div>
          </div>
        </div>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img className='wrapContainer__img' src={Site} alt='slider' />
              <h3 className='wrapContainer__Title'>Site Supervision</h3>
            </div>
          </div>
        </div>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img className='wrapContainer__img' src={Quality} alt='slider' />
              <h3 className='wrapContainer__Title'>100% Quality Assurance</h3>
            </div>
          </div>
        </div>
        <div className='warpContainer'>
          <div className='wrapContainer__div'>
            <div className='wrapContainer__imageContainer'>
              <img
                className='wrapContainer__img'
                src={WholeSale}
                alt='slider'
              />
              <h3 className='wrapContainer__Title'>Wholesale Rates</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
