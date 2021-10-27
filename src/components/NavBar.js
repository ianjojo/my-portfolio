import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-purple-200 text-4xl font-bold cursive tracking-widest"
          >
            ianjojo
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-gray-800 bg-purple-200"
            className="inline-flex items-center py-3 px-3 my-6 mx-3 rounded text-gray-200 nm-concave-gray-500 hover:nm-convex-gray-500"
            // className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-purple-200"
          >
            blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-800 bg-purple-200"
            className="inline-flex items-center py-3 px-3 my-6 mx-3 rounded text-gray-200 nm-concave-gray-500 hover:nm-convex-gray-500"
          >
            projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-800 bg-purple-200"
            className="inline-flex items-center py-3 px-3 my-6 mx-3 rounded text-gray-200 nm-concave-gray-500 hover:nm-convex-gray-500"
          >
            about me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
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
          />
        </div>
      </div>
    </header>
  );
}
