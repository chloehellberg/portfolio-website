import React from "react";
import "./Home.css";
import { Card } from "react-bootstrap";
import me from "./../img/me.jpg";
import * as Icon from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

export default function Home() {
  return (
    <div className="Home">
      <div className="home-lander">
        <img className="mainPhoto" src={me} alt="Chloe" />
        <div className="greeting">
          <h2 className="greetingName">Hi, I'm Chloe. Nice to meet you.</h2>
          <h5 className="greetingSentence">
            I'm a Full Stack Developer with a passion for the Front-End and a
            respect for the Back-End. Inquisitive + Curious - I'm always on the
            lookout for new and interesting things.
          </h5>
        </div>
      </div>
      <div className="contentBeforeProjectGrid" />

      <div className="projectPreview">
        <Card
          className="homeProject"
          style={{ width: "20rem", height: "37rem" }}
        >
          <Card.Body>
            <Icon.WindowSidebar className="skillsImage" />
            <Card.Title>FRONT-END</Card.Title>
            <Card.Text>
              <p className="skillsText">
                I value well-written code, thoughful interactions, and bringing
                ideas to life in the browser.
              </p>
              <br />
              <h6>Languages/Frameworks:</h6>
              <p className="skillsText">
                JavaScript
                <br />
                React / Redux
                <br />
                HTML / CSS
              </p>
              <h6>Focus:</h6>
              <p className="skillsText">
                REST API's
                <br />
                Responsive Design
                <br />
                Performance Optimization
                <br />
                jQuery
                <br />
                OAuth 2.0 + OIDC
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="homeProject"
          style={{ width: "20rem", height: "37rem" }}
        >
          <Card.Body>
            <Icon.CodeSlash className="skillsImage" />
            <Card.Title>BACK-END</Card.Title>
            <Card.Text>
              <p className="skillsText">
                I work best when I understand how the whole system is operating
                and am enjoying learning more about the cloud platform.
              </p>
              <h6>Languages/Frameworks:</h6>
              <p className="skillsText">
                Node.js
                <br />
                C# / .NET
                <br />
                AWS
                <br />
              </p>
              <h6>Focus:</h6>

              <p className="skillsText">
                MySQL
                <br />
                Firebase / Firestore
                <br />
                Object Oriented Programming
                <br />
                DynamoDB
                <br />
                Cognito
                <br />
                Lambda Functions
                <br />
                Gateway
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="homeProject"
          style={{ width: "20rem", height: "37rem" }}
        >
          <Card.Body>
            <Icon.Lightning className="skillsImage" />
            <Card.Title>TOOLS</Card.Title>
            <Card.Text>
              <p className="skillsText">
                Bringing it altogether. I love encountering new technologies and
                using the latest tools to help solve problems.
              </p>
              <p className="skillsText">
                NPM
                <br />
                Test Driven Development
                <br />
                Jest
                <br />
                GitHub
                <br />
                Netlify
                <br />
                Visual Studio
                <br />
                Git
                <br />
                Agile
                <br />
                CLI
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="contentBeforeResumeGrid" />
      <div className="projectResumeLinks">
        <div className="seeProjects">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/portfolio">
              <Nav.Link className="homeProjectLink">
                <h3>
                  SEE PROJECTS
                  <Icon.ChevronRight viewBox="0.5 1 16 16" />
                </h3>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="resumeTitle">
            <h3>
              <a
                href="https://www.dropbox.com/s/io92un74jkjys2y/Resume%20-%20Chloe%20Hellberg%20-%20Google%20Docs.pdf?dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
                <Icon.ChevronRight viewBox="0.5 1 16 16" />
              </a>
            </h3>
          </div>
          <div className="toGitHubLink">
            <h3>
              <a
                href="https://github.com/chloehellberg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
                <Icon.ChevronRight viewBox="0.5 1 16 16" />
              </a>
            </h3>
          </div>
        </div>
        <div className="resume">
          <div className="resumeLink"></div>
          <div className="education">
            <h3 className="educationTitle">EDUCATION:</h3>
            <div className="school">
              <h6 className="schoolName">EPICODUS</h6>
              <p className="educationDescription">
                Portland, OR | Aug 2020 - Feb 2021
                <br />
                Web and Mobile Development Certificate
              </p>
            </div>
            <div className="school">
              <h6 className="schoolName">UNIVERSITY OF OREGON</h6>
              <p className="educationDescription">
                Eugene, OR | Sep 2008 - Jun 2012
                <br />
                B.A., History of Art and Architecture
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contentBeforeFooterGrid" />
      <div className="homeFooter">
        <div className="contactInfoAll">
          <p>
            <a href="https://www.linkedin.com/in/chloehellberg/">
              <Icon.Linkedin className="linked" />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://github.com/chloehellberg">
              <Icon.Github className="github" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;Email: chloe.hellberg@gmail.com
          </p>
        </div>
        <div className="copyrightName">
          <p> &copy; Chloe Hellberg 2021</p>
        </div>
      </div>
    </div>
  );
}
