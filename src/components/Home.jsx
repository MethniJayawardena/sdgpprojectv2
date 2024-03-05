import React from 'react';
import Hero from './Hero';
import Offers from './Offers';
import Plan from './Plan';
import Rooms from './Rooms';
import ImageSlider from './ImageSlider';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
    </div>
  );
};

export default Home;