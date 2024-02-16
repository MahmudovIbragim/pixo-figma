import scss from "./Header.module.scss";
import logo from "../../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  console.log(isBurgerMenu);
  const links = [
    {
      name: "Блогеры",
      href: "/",
    },
    {
      name: "Рекламодателям",
      href: "/",
    },
    {
      name: "Кейсы",
      href: "/",
    },
    {
      name: "Контакты",
      href: "/",
    },
  ];

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <img src={logo} alt="" />
            </div>
            <nav className={scss.nav}>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={scss.right}>
            <button className={scss.btn}>Оставить заявку</button>
            <div className={scss.burger__button}>
              <label>
                <input
                  type="checkbox"
                  checked={isBurgerMenu}
                  onChange={() => setIsBurgerMenu(!isBurgerMenu)}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div
              className={
                isBurgerMenu
                  ? `${scss.burger__menu} ${scss.active}`
                  : `${scss.burger__menu}`
              }
            >
              <nav>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
