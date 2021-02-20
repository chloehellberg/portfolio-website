import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import "./Portfolio.css";
// import * as Icon from 'react-bootstrap-icons';
import book from './../img/book.jpg';
import plants2 from './../img/plants2.jpg';
import lightBulb from './../img/lightBulb.jpg';
import yoga from './../img/yoga.jpg';
import tapHouse from './../img/tapHouse.jpg';
import kitty from './../img/kitty.jpg';
import computer from './../img/computer.jpg';
import doggos from './../img/doggos.jpg';
import alpaca from './../img/alpaca.jpg';
import shapes from './../img/shapes.jpg';

export default function Portfolio() {

  return (
    <div className="portfolio">
      <div className="mainPortfolio">
        <h4>Resume Link</h4>
        <h4>GitHub Link</h4>
      </div>
      <div className="projectTitle">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <div className="projectOne">
          <Card style={{ width: '17rem'}}>
            <Card.Body>
              <Card.Title>SUGGEST IT TO ME</Card.Title>
              <Card.Text>ReactJS</Card.Text>
              <Card.Img variant="top"src={book} alt="books" style={{ justifyContent: "center"}}  />

            </Card.Body>
          </Card>
        </div>
        <div className="projectTwo">
        <Card style={{ width: '17em' }}>
            <Card.Body>
              <Card.Title>RE:SOURCE HUB</Card.Title>
              <Card.Text>ReactJS + AWS</Card.Text>
              <Card.Img variant="top" src={lightBulb} alt="lightbulb" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectThree">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>COUCH POTATO</Card.Title>
              <Card.Text>C#/.NET</Card.Text>
              <Card.Img variant="top" src={yoga} alt="yoga" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectFour">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>PLANT JOURNAL</Card.Title>
              <Card.Text>ReactJS</Card.Text>
              <Card.Img variant="top" src={plants2} alt="plants" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectFive">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>ANIMAL SHELTER</Card.Title>
              <Card.Text>C#/.NET</Card.Text>
              <Card.Img variant="top" src={doggos} alt="dogs" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectSix">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>TAP HOUSE</Card.Title>
              <Card.Text>ReactJS + Redux</Card.Text>
              <Card.Img variant="top" src={tapHouse} alt="taphouse" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectSeven">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>LOREM IPSUM</Card.Title>
              <Card.Text>ReactJS + Redux</Card.Text>
              <Card.Img variant="top" src={alpaca} alt="alpaca" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
        <div className="projectEight">
        <Card style={{ width: '17rem' }}>
            <Card.Body>
              <Card.Title>LOREM IPSUM</Card.Title>
              <Card.Text>ReactJS + Redux</Card.Text>
              <Card.Img variant="top" src={shapes} alt="shapes" style={{ justifyContent: "center"}} />

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}