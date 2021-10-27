import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-500">
      {/* <img
        src={image}
        alt="astronaut floating in space"
        className="absolute object-cover w-full h-full"
      /> */}
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-3xl text-gray-400 font-bold cursive leading-none lg:leading-snug home-name ">
          Sveiki, Ianjojo is here.
        </h1>
      </section>
    </main>
  );
}
