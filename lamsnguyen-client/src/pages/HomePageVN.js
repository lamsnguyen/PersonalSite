import React, { useState, useEffect } from "react";
//import { Image, Button } from "react-bootstrap";
import { withRouter, useHistory, Link } from "react-router-dom";
import ENG from "../assets/English.png";
import VIE from "../assets/Vietnam.png";
import "./HomePage.css";


function Language() {

}

function HomePageVN(prop) {
  return (
    <div className="homepage-container">
      <header class="header fixed-top rad-animation-group" id="header">
        <div class="container rad-fade-in">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <a class="navbar-brand">
              <img src={ENG}></img>
              <img src={VIE} href="/VI"></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent, #header"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                  <a data-scroll class="nav-link" href="/#about"
                  >ABOUT</a
                  >
                </li>

                <li class="nav-item">
                  <a data-scroll class="nav-link" href="/#blog"
                  >BLOG</a
                  >
                </li>

                <li class="nav-item">
                  <a data-scroll class="nav-link" href="/#contact"
                  >CONTACT</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section class="rad-showcase rad-showcase--index rad-animation-group rad-fade-down">
        <div class="rad-showcase__bg">
          <img
            class="lozad img-responsive"
            src="data:image/gif;base64,R0lGODlhBwACAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAIAAAIDjI9YADs="
            data-src="http://www.zoetrope.gr/img/showcase/showcase.png"
            data-srcset="http://www.zoetrope.gr/img/showcase/showcase.png 1x, http://www.zoetrope.gr/img/showcase/showcase@2x.png 2x"
            alt="Showcase keyboard and mouse image"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6">
              <h1 class="display-1">
                Welcome, this is Lam.
              <br />
                <span
                >Your analytic developer
                </span>
                <span
                > and more....</span>
              </h1>
              <p class="lead">
                Becoming a Business Analyst enabled me to find my mission: <strong>When we create better user experiences, we make a better world.</strong>
              </p>
              <a href="https://m.me/zmarmara" class="btn btn-primary">
                <i class="icons8-facebook-messenger"></i>
                  &nbsp;Send your message
              </a>
            </div>
          </div>
          <div class="row platform-links">
            <div class="col-12">

              <a href="https://www.linkedin.com/in/zoemarmara/" target="_blank"
              ><div class="icons8-linkedin"></div></a>

              <a href="https://twitter.com/3thirdsorange" target="_blank"
              ><div class="icons8-twitter"></div></a>

              <a href="https://www.quora.com/profile/Zoe-Marmara" target="_blank"
              ><div class="icons8-quora"></div></a>

              <a href="https://pm.stackexchange.com/users/37983/zoe-marmara" target="_blank"
              ><div class="icons8-stack-overflow"></div></a>

              <a href="https://zmarmara.medium.com/" target="_blank"
              ><div class="icons8-medium"></div></a>

            </div>
          </div>
        </div>
        <div class="rad-showcase__bg rad-showcase__bg--mobile">
          <img
            class="lozad img-responsive"
            src="data:image/gif;base64,R0lGODlhBwACAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAIAAAIDjI9YADs="
            data-src="http://www.zoetrope.gr/img/showcase/showcase-mobile.jpg"
            alt="Showcase keyboard and mouse image"
          />
        </div>
      </section>
    </div>
  )
}

export default withRouter(HomePageVN);


