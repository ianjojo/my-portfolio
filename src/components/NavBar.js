import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-500">
      <div className="navbar__container">
        <nav className="navbar">
          <NavLink
            to="/"
            exact
            activeClassName="navbar__active--home"
            className="navbar__home"
          >
            Ian Johnston
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="navbar__active"
            className="navbar__link"
            // className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-200"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="navbar__active"
            className="navbar__link"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="navbar__active"
            className="navbar__link"
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faGithub} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          {/* <SocialIcon
            url="https://twitter.com/shakysnakes"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/ianjojo"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/ianjojo"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> */}
        </div>
      </div>
    </header>
  );
}
