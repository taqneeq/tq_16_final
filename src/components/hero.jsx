import React from 'react';
import VideoBg from '../assets/backgroundbideo.mp4'
import '../styles/hero.css'
const Hero = () => {
  return (
    <div>
      {/* <div className='overlay'></div> */}
      <video className='video_bg' src={VideoBg} data-autoPlay autoPlay webkit-playsinline playsinline loop muted />
      <div className='content'>
        <p className='catchph'>NMIMS' Official Techfest</p>
        <h1 className='Heading'>Taqneeq</h1>
        <p className='text'>Over the years, Taqneeq has turned out to be an exceptional tech fest and has illuminated each & every aspect of Technology</p>
      </div>
      </div>
  );
}

export default Hero;