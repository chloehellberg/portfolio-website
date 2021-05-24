import React from "react";
import "./About.css";
import video from "./../img/video.mp4";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="videoContainer">
        <video
          className="aboutPageVideo"
          id="video"
          autoPlay
          loop
          muted
          poster
          preload="true"
        >
          <source
            src="https://keeporegongreen.org/wp-content/uploads/2020/03/14561_KOG_Website-Home-Video-Loop_R6.mp4"
            type="video/mp4"
          />
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="addAboutSpace"></div>
      <div className="aboutContainer">
        <div className="titleAboutContainer">
          <h1 className="aboutTitle">Hey there - my name is Chloe.</h1>
        </div>
        <div className="bulkAboutContainer">
          <h3 className="aboutParagraph">
            Based in Portland, Oregon. I'm passionate about tying technology and
            humans together in meaningful ways. Working with technology allows
            me to dive into the inquistive and creative side of my personality.
            If you can imagine it - you can build it! Thanks for stopping by!
          </h3>
        </div>
      </div>
    </div>
  );
}
