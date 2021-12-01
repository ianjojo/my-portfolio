import React from "react";
import styled from "styled-components";
// import Burger from "./Burger";
// import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";
const SocialNav = styled.div`
  display: flex;
  //   height: 32px;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  @media screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;
const Nav = styled.nav`
  height: 55px;
  margin: 0;
  // padding: 0.5rem 2.5rem;

  // position: fixed;
  width: 100%;
  // top: 0;
  // left: 0;
  // background-color: black;
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
  //   padding: 0 20px;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: 0;

  @media (max-width: 805px) {
    .navbar__home {
      font-size: 1.5rem;
    }
    .navbar__link {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    // position: fixed;
    // background-color: black;
    // width: 100%;
  }

  .navbar__home {
    padding: 15px 0;
    font-family: "ClashDisplay-SemiBold";
    font-weight: 700;
    color: $white;
    text-decoration: none;
    font-size: 32px;
    padding: 0.5rem 0;
    padding-right: 2rem;
    margin: 0;
    // display: inline-flex;
    text-align: left;
  }

  .navbar__home:hover {
    color: transparent;
    text-shadow: 0 0 4px rgba(42, 241, 233, 0.7);
  }
`;

const Container = styled.div`
  //   margin: 0 2rem;
  display: flex;
  align-items: space-between;
  //   align-items: center;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <div className="navbar__home">Ian Johnston</div>
        </a>
        <SocialNav>
          {/* <SocialIcon
            url="https://github.com/ianjojo"
            className="mr-4"
            target="_blank"
            // fgColor="#fff"
            // bgColor="#323232"

            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/ianjojo"
            className="mr-4"
            target="_blank"
            // fgColor="#fff"
            // bgColor="#323232"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://soundcloud.com/shakysnakes"
            className="mr-4"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:ianallanjohnston@gmail.com"
            className="mr-4"
            target="_blank"
            style={{ height: 35, width: 35 }}
          /> */}
          <a href="https://github.com/ianjojo" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="circle-icon" icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/ianjojo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="circle-icon" icon={faLinkedinIn} />
          </a>
          <a
            href="https://soundcloud.com/shakysnakes"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="circle-icon" icon={faSoundcloud} />
          </a>
          <a
            href="mailto:ianallanjohnston@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="circle-icon" icon={faEnvelope} />
          </a>
        </SocialNav>
        {/* <Burger /> */}
      </Nav>
    </Container>
  );
};

export default Navbar;
