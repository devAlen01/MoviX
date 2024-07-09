import React from "react";
import { Link } from "react-router-dom";
import scss from "./BurgerMenu.module.scss";

const BurgerMenu = ({ navigate, isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className={scss.content}>
        {navigate.map((el, index) => (
          <Link onClick={() => setIsOpen(!isOpen)} key={index} to={el.path}>
            {el.page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
