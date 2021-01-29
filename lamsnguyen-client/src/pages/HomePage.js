import React, { useState, useEffect } from "react";
//import { Image, Button } from "react-bootstrap";
import { withRouter, useHistory, Link } from "react-router-dom";
import ENG from "../assets/English.png";
import VIE from "../assets/Vietnam.png";
import "./HomePage.scss";


function Language () {

}

function HomePage(prop) {
  return (
    <div className="homepage-container">
      <p>
        Please choose a language
      </p>
      <div className="language-bar">
        <button>
          <img src={ENG} alt="ENG"/>
        </button>
        <button>
          <img src={VIE} alt="VIE"/>
        </button>
      </div>
    </div>
  )
}

export default withRouter(HomePage);
