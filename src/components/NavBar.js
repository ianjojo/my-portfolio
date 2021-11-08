import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Hamburger from "./Hamburger";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <header className="bg-gray-500">
      <div className="navbar__container">
        <NavLink
          to="/"
          exact
          activeClassName="navbar__active--home"
          className="navbar__home"
        >
          Ian Johnston
        </NavLink>
        <div className="hamburgerr" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <nav className="navbar">
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
      <div className="social-nav">
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

      <style jsx>{`
        header {
          margin: 2rem;
        }
        .navbar {
          position: sticky;
          display: flex;
          flex-wrap: wrap;
          // float: right;

          padding: 0px;
          overflow: hidden;
        }

        .hamburgerr {
          display: none;
          z-index: 6;
        }

        .navbar__container {
          top: 0;
          left: 0;
          margin: 0;
        }
        @media (max-width: 767px) {
          .hamburgerr {
            display: inline;
            position: absolute;
            top: 2.2rem;
            right: 2.5rem;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }

          .navbar {
            display: ${hamburgerOpen ? "flex" : "none"};

            flex-direction: column;
            // background-color: blue;
            height: 100vh;
            margin-top: 0;
            width: 100%;
            align-items: flex-start;
            // margin-top: 50px;
            // position: fixed;

            &__home {
              text-align: left;
            }
          }
          .navbar__link {
            border-bottom: 1px solid white;
            width: 100%;
          }
          .navbar__container {
            align-items: flex-start;
            padding-bottom: 0;
            margin-bottom: 0;
          }

          .navbar__active {
            text-underline-offset: 1px;
          }
        }
      `}</style>
    </header>
  );
}
