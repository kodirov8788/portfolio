import React, { useState } from "react";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
// import React from "react-icons/";
import Logo from "../../essets/kodirov__logo-svg.svg";
import "./header.css";

function Header() {
  return (
    <div className="header header__backColor">
      <div className="header__container">
        <a href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
        <div className="header__right">
          <ul className="header__Collection">
            <li className="header__listItem header__listActive">
              <a href="#">
                <p>Home</p>{" "}
              </a>
            </li>
            <li className="header__listItem ">
              <a href="#">
                <p>Portfolios</p>{" "}
              </a>
            </li>
            <li className="header__listItem ">
              <a href="#">
                <p>Blog</p>
              </a>
            </li>
            <li className="header__listItem ">
              <a href="#">
                <p>Contact</p>
              </a>
            </li>
          </ul>

          <div className="header__iconCollection">
            <li className="header__icon__listItem">
              <a href="#">
                <FaTelegramPlane />
              </a>
            </li>
            <li className="header__icon__listItem">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="header__icon__listItem">
              <a href="#">
                <AiFillGithub />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
