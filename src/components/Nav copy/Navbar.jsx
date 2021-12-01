import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
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

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <div className="navbar__home">Ian Johnston</div>
        </a>
        <Burger />
      </Nav>
    </Container>
  );
};

export default Navbar;
