import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import "./Portfolio.css";
import book from './../img/book.jpg';
import plants2 from './../img/plants2.jpg';
import lightBulb from './../img/lightBulb.jpg';
import yoga from './../img/yoga.jpg';
import tapHouse from './../img/tapHouse.jpg';
import doggos from './../img/doggos.jpg';
import alpaca from './../img/alpaca.jpg';
import shapes from './../img/shapes.jpg';
import { spring } from 'react-flip-toolkit';
// import styled from 'styled-components';
import { useSpring, animated } from "react-spring";

export default function Portfolio() {

  const projectsRef = useRef(null);
  // const [focus, setFocus] = useState(null);
  // const cardData = [...Array(4).keys()];

  useEffect(() => {
    const squares = [...projectsRef.current.querySelectorAll(".square")];
    squares.forEach((el, i) => {
      spring({
        config: "wobbly",
        values: {
          translateY: [-15, 0],
          opacity: [0, 1]
        },
        onUpdate: ({ translateY, opacity}) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 100,
        onComplete: () => {
        }
      });
    });
  }, []);




  // const onClick = index => {
  //   setFocus(focus === index ? null : index);
  // };

  // const CardItem = ({ index, onClick }) => (
  //   <div className="square" onClick={() => onClick(index)}>
  //     <Card>
  //       <Card.Body>
  //         <Card.Title />
  //         <Card.Text />
  //         <Card.Img />
  //       </Card.Body>
  //       <div className="cardImage" />
  //       <div className="cardBody">{cardData.map(i => <div key={i} />)}</div>
  //     </Card>
  //   </div>
  // );
  
  // const ExpandedCardItem = ({ index, onClick }) => (
  //   <div className="expandedCardItem" onClick={() => onClick(index)}>
  //     <div className="expandedCardItemContent">
  //       <div className="cardImage cardImageExpanded" />
  //       <div className="cardBody">{cardData.map(i => <div />)}</div>
  //       <div className="additional-content">
  //         {cardData.map(i => <div key={i} />)}
  //       </div>
  //     </div>
  //   </div>
  // );

  function PopoutProjectCard(props) {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 330, (x - window.innerWidth / 2) / 300, 1.1]
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

  function FlipProjectCard(props) {
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
      <div onClick={() => setFlipped(state => !state)}>
        <animated.div className="cardFront" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>{props.children}</animated.div>
        <animated.div className="cardBack" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}></animated.div>
      </div>
    )
  }

  return (
    <div className="portfolio">
      <div className="mainPortfolio">
        <h4>Resume Link</h4>
        <h4>GitHub Link</h4>
      </div>
      <div className="projectTitle"><h2>Projects</h2> </div>
      
    
      <div className="projects" ref={projectsRef}>
        <div className="square">
          <PopoutProjectCard>
          <FlipProjectCard>
          <div className="projectOne">
            <Card style={{ width: '17rem'}}>
              <Card.Body>
                <Card.Title>SUGGEST IT TO ME</Card.Title>
                <Card.Text>ReactJS</Card.Text>
                <Card.Img variant="top"src={book} alt="books" style={{ justifyContent: "center"}}  />
              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectTwo">
          <Card style={{ width: '17em' }}>
              <Card.Body>
                <Card.Title>RE:SOURCE HUB</Card.Title>
                <Card.Text>ReactJS + AWS</Card.Text>
                <Card.Img variant="top" src={lightBulb} alt="lightbulb" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectThree">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>COUCH POTATO</Card.Title>
                <Card.Text>C#/.NET</Card.Text>
                <Card.Img variant="top" src={yoga} alt="yoga" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectFour">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>PLANT JOURNAL</Card.Title>
                <Card.Text>ReactJS</Card.Text>
                <Card.Img variant="top" src={plants2} alt="plants" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectFive">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>ANIMAL SHELTER</Card.Title>
                <Card.Text>C#/.NET</Card.Text>
                <Card.Img variant="top" src={doggos} alt="dogs" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectSix">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>TAP HOUSE</Card.Title>
                <Card.Text>ReactJS + Redux</Card.Text>
                <Card.Img variant="top" src={tapHouse} alt="taphouse" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectSeven">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>LOREM IPSUM</Card.Title>
                <Card.Text>ReactJS + Redux</Card.Text>
                <Card.Img variant="top" src={alpaca} alt="alpaca" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
        <div className="square">
        <PopoutProjectCard>
        <FlipProjectCard>
          <div className="projectEight">
          <Card style={{ width: '17rem' }}>
              <Card.Body>
                <Card.Title>LOREM IPSUM</Card.Title>
                <Card.Text>ReactJS + Redux</Card.Text>
                <Card.Img variant="top" src={shapes} alt="shapes" style={{ justifyContent: "center"}} />

              </Card.Body>
            </Card>
          </div>
          </FlipProjectCard>
          </PopoutProjectCard>
        </div>
      </div>
    </div>
  );
}