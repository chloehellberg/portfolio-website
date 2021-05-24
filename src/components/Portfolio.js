import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import "./Portfolio.css";
import book from "./../img/book.jpg";
import plants2 from "./../img/plants2.jpg";
import lightBulb from "./../img/lightBulb.jpg";
import yoga from "./../img/yoga.jpg";
import tapHouse from "./../img/tapHouse.jpg";
import doggos from "./../img/doggos.jpg";
import alpaca from "./../img/alpaca.jpg";
import shapes from "./../img/shapes.jpg";
import { spring } from "react-flip-toolkit";
// import styled from 'styled-components';
import { useSpring, animated } from "react-spring";
import * as Icon from "react-bootstrap-icons";
import { Tooltip, IconButton } from "@material-ui/core";

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
          opacity: [0, 1],
        },
        onUpdate: ({ translateY, opacity }) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 100,
        onComplete: () => {},
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
    const calc = (x, y) => [
      -(y - window.innerHeight / 2) / 330,
      (x - window.innerWidth / 2) / 300,
      1.1,
    ];
    const trans = (x, y, s) =>
      `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [styles, setStyles] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 },
    }));
    return (
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) =>
          setStyles({ xys: calc(x, y) })
        }
        onMouseLeave={() => setStyles({ xys: [0, 0, 1] })}
        style={{ transform: styles.xys.interpolate(trans) }}
      >
        {props.children}
      </animated.div>
    );
  }

  // function FlipProjectCard(props) {
  //   const [flipped, setFlipped] = useState(false);
  //   const { transform, opacity } = useSpring({
  //     opacity: flipped ? 1 : 0,
  //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  //     config: { mass: 5, tension: 500, friction: 80 },
  //   });
  //   return (
  //     <div onClick={() => setFlipped((state) => !state)}>
  //       <animated.div
  //         className="cardFront"
  //         style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
  //       >
  //         {props.children}
  //       </animated.div>
  //       <animated.div
  //         className="cardBack"
  //         style={{
  //           opacity,
  //           transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
  //         }}
  //       ></animated.div>
  //     </div>
  //   );
  // }

  return (
    <div className="portfolio">
      <div className="spaceBeforePortfolio"></div>
      <div className="projectTitle">
        <h2>PROJECTS</h2>{" "}
      </div>
      <div className="mainPortfolio">
        <h4>
          <a
            href="http://github.com/chloehellberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Out My GitHub
            <Icon.ChevronRight viewBox="0.5 1 16 16" />
          </a>
        </h4>
        <h4></h4>
      </div>

      <div className="projects" ref={projectsRef}>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectOne">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>SUGGEST IT TO ME</Card.Title>
                  <Card.Text>
                    ReactJS &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/SuggestItToMe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Tooltip title="See Live!">
                      <a
                        href="https://tender-neumann-d50684.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Play
                          className="playPortfolio"
                          viewBox="0.5 1 16 16"
                        />
                      </a>
                    </Tooltip>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={book}
                      alt="books"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        App takes into consideration users typically read books
                        based on genre and suggests something to read out of
                        their normal repertoire.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectTwo">
              <Card style={{ width: "17em" }}>
                <Card.Body>
                  <Card.Title>RE:SOURCE HUB</Card.Title>
                  <Card.Text>
                    ReactJS + AWS &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/resourcehub-react"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Tooltip title="See Live!">
                      <a
                        href="https://www.resource-hub.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Play
                          className="playPortfolio"
                          viewBox="0.5 1 16 16"
                        />
                      </a>
                    </Tooltip>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={lightBulb}
                      alt="lightbulb"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        App where users can create a password protected account
                        to post to a public feed and share helpuful tech
                        resources. AWS backend using Lambda functions with full
                        CRUD functionality.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectThree">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>COUCH POTATO</Card.Title>
                  <Card.Text>
                    C#/.NET &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/C-Fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={yoga}
                      alt="yoga"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        Workout program builder that allows a user to create
                        custome daily workouts based on their skill level and
                        goals. Various workouts stored in MySQL database.
                        Utilizing RESTful principles.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectFour">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>PLANT JOURNAL</Card.Title>
                  <Card.Text>
                    JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/plant-journal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Tooltip title="See Live!">
                      <a
                        href="https://youthful-shaw-a126b9.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Play
                          className="playPortfolio"
                          viewBox="0.5 1 16 16"
                        />
                      </a>
                    </Tooltip>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={plants2}
                      alt="plants"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        An app that allows the user to log details about their
                        favorite plants, including how many days since last
                        watering, plant type, and initial day of planting.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectFive">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>ANIMAL SHELTER</Card.Title>
                  <Card.Text>
                    C#/.NET &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/Animal-Shelter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={doggos}
                      alt="dogs"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        Imaginary animal shelter that lists/tracks the available
                        cats and dogs for adoption. API has integrated
                        authentication to keep the API Read-Only for all users
                        except administrators.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectSix">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>TAP HOUSE</Card.Title>
                  <Card.Text>
                    ReactJS + Redux &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/TapRoomRedux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Tooltip title="See Live!">
                      <a
                        href="https://upbeat-mcnulty-9578b5.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Play
                          className="playPortfolio"
                          viewBox="0.5 1 16 16"
                        />
                      </a>
                    </Tooltip>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={tapHouse}
                      alt="taphouse"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        Imaginary tap room where a bar can store and track their
                        kegs. Allows a user to add a new keg, click on keg to
                        see its details, see how many pints are left in a keg
                        and sell a pint.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectSeven">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>PIERRE'S BAKERY</Card.Title>
                  <Card.Text>
                    C#/.NET &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/PierresTreats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={alpaca}
                      alt="alpaca"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        Application for an imaginary bakery shop utilizing
                        MySQL, Entity Framework and Identity to display
                        authentication and many-to-many relationships.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
        <div className="square">
          <PopoutProjectCard>
            {/* <FlipProjectCard> */}
            <div className="projectEight">
              <Card style={{ width: "17rem" }}>
                <Card.Body>
                  <Card.Title>EXCHANGE RATE</Card.Title>
                  <Card.Text>
                    JavaScript + JQuery&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/chloehellberg/exchange-rate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Github
                        className="githubPortfolio"
                        viewBox="0.5 1 16 16"
                      />
                    </a>
                  </Card.Text>
                  <div className="img__wrap">
                    <Card.Img
                      variant="top"
                      src={shapes}
                      alt="shapes"
                      style={{ justifyContent: "center" }}
                    />
                    <div className="img__description_layer">
                      <p className="img__description">
                        App that allows a user to enter an amount in US dollars
                        and find out the current exchange rate for other
                        currencies using an API with real-time data.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* </FlipProjectCard> */}
          </PopoutProjectCard>
        </div>
      </div>
    </div>
  );
}
