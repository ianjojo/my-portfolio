import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <main className="bg-gray-500">
      {/* <img
        src={image}
        alt="astronaut floating in space"
        className="absolute object-cover w-full h-full"
      /> */}
      <section className="welcome">
        <div className="welcome__left">
          <h1 className="welcome__text">Sveiki, Ianjojo is here.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            dolorem velit aliquid minus eos officiis quibusdam enim fugiat ex
            blanditiis omnis deserunt fuga quaerat assumenda atque veritatis!
            Aliquam magnam sed atque voluptate dolorem fugiat molestias.
            Veritatis, aut ipsa, maiores inventore cumque, quidem eos molestiae
            voluptatum maxime architecto beatae ex explicabo.
          </p>
        </div>
      </section>
    </main>
  );
}
