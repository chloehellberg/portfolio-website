import React, { useRef, useEffect } from "react";
import './Home.css'
import { Card } from "react-bootstrap";
import me from './../img/me.jpg';
import * as Icon from 'react-bootstrap-icons';
import { LinkContainer } from "react-router-bootstrap";
import  Nav  from "react-bootstrap/Nav";
import Resume from './../img/Resume.pdf';
// import { spring } from 'react-flip-toolkit';
import { useSpring, animated } from "react-spring";




export default function Home() {

  

  // const homeProjectsRef = useRef(null);

  // useEffect(() => {
  //   const homeProjects = [...homeProjectsRef.current.querySelectorAll(".homeProjects")];
  //   homeProjects.forEach((el, i) => {
  //     spring({
  //       config: "wobbly",
  //       values: {
  //         translateY: [-15, 0],
  //         opacity: [0, 1]
  //       },
  //       onUpdate: ({ translateY, opacity}) => {
  //         el.style.opacity = opacity;
  //         el.style.transform = `translateY(${translateY}px)`;
  //       },
  //       delay: i * 25,
  //       onComplete: () => {
  //       }
  //     });
  //   });
  // }, []);

  function PopoutCard(props) {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 70, (x - window.innerWidth / 2) / 70, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    
    const [styles, setStyles] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => setStyles({ xys: calc(x, y) })}
        onMouseLeave={() => setStyles({ xys: [0, 0, 1] })}
        style={{ transform: styles.xys.interpolate(trans) }}
      >
        {props.children}
      </animated.div>
    )
  }

  return (
    <div className="Home">
      <div className="home-lander">
        <img className="mainPhoto" src={me} alt="Chloe" />
        <h1 className="greeting">HELLO, I'M CHLOE</h1>
      </div>
      <div className="contentBeforeProjectGrid" />

      
      <div className="projectPreview" > 
        <div className="homeProjects">
        <PopoutCard>
          <Card className="homeProjectOne"style={{ width: '12rem', height: '12rem'}}>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Languages</Card.Text>
            </Card.Body>
          </Card>
        </PopoutCard>
        </div>





        <div className="homeProjects">
        <PopoutCard>
          <Card className="homeProjectTwo"style={{ width: '12rem', height: '12rem'}}>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Languages</Card.Text>
            </Card.Body>
          </Card>
          </PopoutCard>
        </div>
        <div className="homeProjects">
        <PopoutCard>
          <Card className="homeProjectThree"style={{ width: '12rem', height: '12rem'}}>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Languages</Card.Text>
            </Card.Body>
          </Card>
        </PopoutCard>
        </div>
        <div className="homeProjects">
        <PopoutCard>
          <Card className="homeProjectFour"style={{ width: '12rem', height: '12rem'}}>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Languages</Card.Text>
            </Card.Body>
          </Card>
        </PopoutCard>
        </div>
      </div>






      <div className="contentBeforeResumeGrid" />
      <div className="projectResumeLinks">
        <div className="seeProjects">  
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/portfolio">
              <Nav.Link className="homeProjectLink"><h4>SEE PROJECTS<Icon.ChevronRight viewBox="0.5 1 16 16"/></h4></Nav.Link>
            </LinkContainer>
          </Nav> 
        </div>
        <div className="resume"> 
          <div className="resumeContents">
            <p>Hi there</p>
          </div>
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/about">
              <Nav.Link className="resumeLink"><h4>RESUME<Icon.ChevronRight viewBox="0.5 1 16 16"/></h4></Nav.Link>
            </LinkContainer>
          </Nav> 
        </div>
        
      </div>



    <div className="contentBeforeFooterGrid" />
      <div className="homeFooter">
        <div className="contactInfoAll">
          <p>
            <a href="https://www.linkedin.com/in/chloehellberg/"><Icon.Linkedin className="linked"/></a>&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/chloehellberg"><Icon.Github className="github"/></a>&nbsp;&nbsp;&nbsp;&nbsp;Email: chloe.hellberg@gmail.com</p>
        </div>
        <div className="copyrightName">
          <p> &copy; Chloe Hellberg 2021</p>
        </div>
      </div>
    </div>
  );
}


























// <div className="hex">
// <div className="hexTop"></div>
// <div className="hexMiddle"></div>
// <div className="hexBottom"></div>
// </div>
// <div className="hex">
// <div className="hexTop"></div>
// <div className="hexMiddle"></div>
// <div className="hexBottom"></div>
// </div>
// <div className=".hexRowEven">
// <div className="hex">
// <div className="hexTop"></div>
// <div className="hexMiddle"></div>
// <div className="hexBottom"></div>
// </div>