import "./Header.css";
import { Flex } from "antd";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { LuShoppingBag } from "react-icons/lu";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header id="header">
      <div className="container">
        <Flex align="center" justify="space-between" gap="middle">
          <Link to="/" className="header-logo">
            <Flex align="center" gap="small">
              <img src={logo} alt="header logo" />
              <div className="header-logo-text">
                <h3>AkaPhone</h3>
                <p>Качестенное по доступное цену</p>
              </div>
            </Flex>
          </Link>

          <div className={`menubar ${openMenu ? "hide" : "show"}`}>
            <Flex
              align="center"
              justify="space-between"
              gap="middle"
              className="navbar-links-wrapper"
            >
              <IoMdClose
                id="close-menu"
                cursor="pointer"
                onClick={() => setOpenMenu(false)}
              />
              <ul className="header-lists">
                <Flex
                  align="center"
                  gap="middle"
                  className="header-lists-wrapper"
                >
                  <li>
                    <NavLink>Скидки</NavLink>
                  </li>
                  <li>
                    <NavLink>Специальные предложения</NavLink>
                  </li>
                  <li>
                    <NavLink>Каталог товаров</NavLink>
                  </li>
                </Flex>
              </ul>

              <div className="header-order">
                <Flex
                  vertical
                  align="center"
                  justify="center"
                  gap="small"
                  className="header-order-wrapper"
                >
                  <p>+998(90) 225 - 19 - 97</p>
                  <a href="tel:+998(90) 225 - 19 - 97">Заказать звонок</a>
                </Flex>
              </div>

              <Link to="#">
                <LuShoppingBag className="card-icon" />
              </Link>
            </Flex>
          </div>

          <RiMenuFill
            cursor="pointer"
            id="open-menu"
            onClick={() => setOpenMenu(true)}
          />
        </Flex>
      </div>
    </header>
  );
}

export default Header;
