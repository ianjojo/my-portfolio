import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./accordian.scss";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 18px;
  right: 24px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.125rem;
    background-color: ${({ isActive }) => (isActive ? "white" : "whitesmoke")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ isActive }) =>
        isActive ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
const Nav = styled.nav`
  height: 55px;
  margin: 0;
  padding: 0;

  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
  //   padding: 0 20px;
  display: flex;
  align-items: center;
  //   justify-content: space-between;

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
    display: inline-flex;
    text-align: left;
  }

  .navbar__home:hover {
    color: transparent;
    text-shadow: 0 0 4px rgba(42, 241, 233, 0.7);
  }
`;

const Container = styled.div`
  //   margin: 0 2rem;

  //   align-items: center;
  //   width: 100%;
`;

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  //   const [scrolled, setScrolled] = React.useState(false);
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   });
  //   let navbarClasses = ["navbar"];
  //   if (scrolled) {
  //     navbarClasses.push("scrolled");
  //   }
  return (
    <>
      <header className="stickyheader">
        {/* <header className="scrolled"> */}
        <Container>
          <Nav>
            <a href="/">
              <div className="navbar__home">Ian Johnston</div>
            </a>
            <StyledBurger
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <div />
              <div />
              <div />
            </StyledBurger>
          </Nav>
        </Container>
        <div className="accordion-item">
          {/* <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>menu</div>
          <div>{isActive ? "-" : "+"}</div>
        </div> */}
          {isActive && (
            <div className="accordion-content">
              <ul>
                <li>
                  <NavLink
                    to="/post"
                    activeClassName="navbar__active"
                    className="navbar__link"
                    onClick={() => setIsActive(!isActive)}
                    // className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-200"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    activeClassName="navbar__active"
                    className="navbar__link"
                    onClick={() => setIsActive(!isActive)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="navbar__active"
                    className="navbar__link"
                    onClick={() => setIsActive(!isActive)}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Accordion;
