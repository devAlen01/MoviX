import React from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className={scss.line}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2 className={scss.logo}>
              Movi <span>X</span>
            </h2>

            <p>
              "В мире кино нет границ — откройте новые горизонты вместе с
              MoviX!"
            </p>
            <div className={scss.icons}>
              <span>
                <FaInstagram />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FaTelegram />
              </span>
              <span>
                <FaFacebook />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
