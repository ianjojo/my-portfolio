import React from "react";
import "./Home.scss";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import sig from "./sig.png";
export default function Home() {
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
  return (
    <main className="mainpage">
      {/* <img
        src={image}
        alt="astronaut floating in space"
        className="absolute object-cover w-full h-full"
      /> */}
      <section className="welcome">
        <div className="welcome__left">
          {/* <h1 className="welcome__text">Sveiki, Ianjojo is here.</h1> */}
          <p className="hello">
            Hello, I'm Ian! Web dev, earl grey tea enthusiast, musician,
            prolific tinkerer - looking for the intersection of all things. My
            skills include toasting hazelnuts to perfection and front-end
            development with HTML5, SASS and ReactJS. I also have some back-end
            knowledge with Node, ExpressJS and MongoDB. My wife and my cat think
            I’m the most awesome and that's pretty much all I need. This
            portfolio was created from scratch with React and SASS and I'm using
            sanity.io to manage the content.
          </p>
        </div>
      </section>
      {/* <SocialNav>
        <SocialIcon
          url="https://twitter.com/shakysnakes"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          bgColor="#323232"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/ianjojo"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          bgColor="#323232"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://linkedin.com/in/ianjojo"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          bgColor="#323232"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://soundcloud.com/shakysnakes"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          bgColor="#323232"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://open.spotify.com/artist/5GSBSjeomyWpkkuMcrmxSA?si=1bFYaF-mTQCT9mdfmXlnXg"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          bgColor="#323232"
          style={{ height: 35, width: 35 }}
        />
      </SocialNav>
      <div className="sigbox">
        <img src={sig} alt="my signature" className="sig" />
      </div> */}
    </main>
  );
}
