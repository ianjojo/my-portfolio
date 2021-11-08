import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  //   margin: 0 2rem;
  height: 55px;
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
  //   padding: 0 20px;
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  .navbar__home {
    padding: 15px 0;
    font-family: "ClashDisplay-Semibold";
    font-weight: 500;
    color: $white;
    text-decoration: none;
    font-size: 2rem;
    padding: 0.5rem 0;
    padding-right: 2rem;
    margin: 0;
    display: inline-flex;
    text-align: left;
  }
`;

const Container = styled.div`
  margin: 0 2rem;

  //   align-items: center;
  //   width: 100%;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <div className="navbar__home">Ian Johnston</div>
        <Burger />
      </Nav>
    </Container>
  );
};

export default Navbar;
