import React from "react";
import image from "../bg.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="swirly pink and blue paint background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-purple-800 font-bold cursive leading-none lg:leading-snug home-name">
          ianjojo is here.
        </h1>
      </section>
    </main>
  );
}
