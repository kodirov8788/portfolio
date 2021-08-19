import React, { useState } from "react";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
// import React from "react-icons/";
import Logo from "../../essets/kodirov__logo-svg.svg";
import "./header.css";

function Header() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const hover1 = document.querySelector(".hover1");
  if (hover=== true) {
hover1.style.width="100%"
hover1.style.left = "0";
  }

  return (
    <div className="header header__backColor">
      <div className="header__container">
        <a href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
        <div className="header__right">
          <ul className="header__Collection">
            <li
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              className="header__listItem "
            >
              <div className="hover1 "></div>
              <a href="#">Home</a>
            </li>
            <li
              onMouseOver={() => setHover2(true)}
              onMouseOut={() => setHover2(false)}
              className={
                !hover2
                  ? "header__listItem "
                  : "header__listItem header__listActive"
              }
            >
              <a href="#">Portfolios</a>
            </li>
            <li
              onMouseOver={() => setHover3(true)}
              onMouseOut={() => setHover3(false)}
              className={
                !hover3
                  ? "header__listItem "
                  : "header__listItem header__listActive"
              }
            >
              <a href="#">
                <p>Blog</p>
              </a>
            </li>
            <li
              onMouseOver={() => setHover4(true)}
              onMouseOut={() => setHover4(false)}
              className={
                !hover4
                  ? "header__listItem "
                  : "header__listItem header__listActive"
              }
            >
              <a href="#">Contact</a>
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
