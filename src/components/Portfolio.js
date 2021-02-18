import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Portfolio.css";
import * as Icon from 'react-bootstrap-icons';

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
        <ul>
          <section>Project 1</section>
          <section>Project 2</section>
        </ul>
      </div>
    </div>
  );
}