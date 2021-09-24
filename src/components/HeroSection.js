import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>“Reach Minds. Touch Hearts. Build A Better Living.”</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Know More
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
