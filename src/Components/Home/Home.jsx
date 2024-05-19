import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
const Home = () => {
  return (
    <>
      <div className='container_outer'>
        <div className='container_inner'>
          <div className='container-1'>
            <h1>Fuel Your Ambition with Us.</h1>
          </div>
          <div className='container-2'>
            <img
              src={`https://www.edx.org/static/homepage-hero-76cf867375a582777172c08815b4e683.png`}
              alt='img1'
            />
          </div>
        </div>
        <div className='container_innerB'>
          <h1>Recognized for AI innovation in Learning</h1>
          <img src='https://www.qspiders.com/_nuxt/img/qspiders_logo.6096665.png' />
        </div>
      </div>
    </>
  );
};

export default Home;
