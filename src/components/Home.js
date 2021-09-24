import React from 'react';
import HeroSection from './HeroSection';
import '../App.css';
import Cards from './Cards';
import ImageSlider from './ImageSlider';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ImageSlider />
    </>
  );
}

export default Home;
