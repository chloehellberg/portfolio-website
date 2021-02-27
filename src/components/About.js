import React from 'react';
import './About.css';
import video from './../img/video.mp4';

export default function About() {
  return (
    <div className="aboutPage">
      <div className="videoContainer">
        <video className="aboutPageVideo" id="video" autoPlay loop muted poster preload="true">
          <source src="https://keeporegongreen.org/wp-content/uploads/2020/03/14561_KOG_Website-Home-Video-Loop_R6.mp4" type="video/mp4"/>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className="addAboutSpace"></div>
      <div className="aboutContainer">
        <h1>hey there!</h1>
        <p></p>
      </div>
    </div>
  )
}