import React, { useState } from "react";
import styled from "styled-components";
// import RightNav from "./RightNav";
import { NavLink } from "react-router-dom";

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
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "whitesmoke")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  .navbar__link {
    font-family: "ClashDisplay-Regular";
    font-weight: 500;
    color: $white;
    text-decoration: none;
    font-size: 26px;
    padding: 0.5rem 0;
    padding-right: 2rem;
    margin: 0;
    display: inline-flex;
    text-align: left;
  }
  .navbar__link:hover {
    color: transparent;
    text-shadow: 0 0 4px rgba(42, 241, 233, 0.7);
  }
  .navbar__active {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 1px;
    color: rgb(42, 241, 233);
    // filter: brightness(110);
    // text-shadow: rgba(131, 227, 230, 0.9) 0px 0px 17px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: rgba(
      0,
      0,
      0,
      0.6
    ); // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(8px); // This be the blur

    position: fixed;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 40vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <Ul open={open}>
        <li>
          <NavLink
            to="/post"
            activeClassName="navbar__active"
            className="navbar__link"
            onClick={() => setOpen(!open)}
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
            onClick={() => setOpen(!open)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="navbar__active"
            className="navbar__link"
            onClick={() => setOpen(!open)}
          >
            About
          </NavLink>
        </li>
      </Ul>
    </>
  );
};

export default Burger;
