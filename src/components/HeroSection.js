import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function HeroSection() {
  const [text, setText] = useState('');

  const changeText = () => {
    if (window.innerWidth <= 960) {
      setText('contact us');
    } else {
      setText('Know More');
    }
  };
  useEffect(() => {
    changeText();
  }, []);

  window.addEventListener('resize', changeText);

  return (
    <div className='hero-container'>
      <h1>“Reach Minds. Touch Hearts. Build A Better Living.”</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {text}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
