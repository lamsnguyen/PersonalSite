import React, { useState, useEffect } from "react";
//import { Image, Button } from "react-bootstrap";
import { withRouter, useHistory, Link } from "react-router-dom";

function HomePage(prop) {
  return (
    <div>
      <p>Hi, this is Lam</p>
      <p>Please choose a languaga</p>
    </div>
  )
}

export default withRouter(HomePage);
