import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import BurgerMenu from "./BurgerMenu";
import { IoMenu } from "react-icons/io5";
const navigate = [
  {
    path: "/",
    page: "Главная",
  },
  {
    path: "/movie",
    page: "Фильмы",
  },
  {
    path: "/tvShow",
    page: "Сериалы",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 750);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h2>
              Movi<span>X</span>
            </h2>
          </div>
          {isMobile ? (
            <>
              <button
                className={scss.burger_btn}
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoMenu />
              </button>
              <BurgerMenu
                isOpen={isOpen}
                navigate={navigate}
                setIsOpen={setIsOpen}
              />
            </>
          ) : (
            <>
              <nav className={scss.navigate}>
                {navigate.map((page, index) => (
                  <NavLink key={index} to={page.path}>
                    {page.page}
                  </NavLink>
                ))}
              </nav>
              <Link className={scss.user}>
                <FaRegCircleUser />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
