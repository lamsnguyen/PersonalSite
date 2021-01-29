import React, { useState, useEffect } from "react";
//import { Image, Button } from "react-bootstrap";
import { withRouter, useHistory, Link } from "react-router-dom";

function HomePage(prop) {
  return (
    <div>
      <p>
        Please choose a language
      </p>
      <img className="English" src="../assets/English.png"></img>
    </div>
  )
}

export default withRouter(HomePage);
