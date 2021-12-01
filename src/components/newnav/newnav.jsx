import React from "react";
import "./newnav.scss";
const newnav = () => {
  return (
    <div className="nav-container">
      <div className="lines-container">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <ul className="menu">
        <li>
          <a href="#" className="outer">
            About
          </a>
        </li>
        <li>
          <a href="#" className="outer blog">
            Blog
          </a>
          <ul class="blog-child">
            <li>
              <a href="#" className="inner">
                Tech
              </a>
            </li>
            <li>
              <a href="#" className="inner">
                Travels
              </a>
            </li>
            <li>
              <a href="#" className="inner">
                Gaming
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="outer contact">
            Contacts
          </a>
          <ul class="contact-child">
            <li>
              <a href="#" class="inner">
                Email
              </a>
            </li>
            <li>
              <a href="#" class="inner">
                Social Media
              </a>
            </li>
            <li>
              <a href="#" class="inner">
                Address
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="outer">
            CV
          </a>
        </li>
      </ul>
      <div class="pointer"></div>
    </div>
  );
};

export default newnav;
