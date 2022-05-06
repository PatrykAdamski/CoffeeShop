import React from "react";
import { UserNavItem } from "../userNavItem/UserNavItem";
import { useState } from "react";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const UserNav = () => {
  const [isActiveUserNav, setActiveUserNav] = useState(false);

  return (
    <div className={`user-nav ${isActiveUserNav ? "user-nav--active" : ""}`}>
      <div
        onClick={() => setActiveUserNav(!isActiveUserNav)}
        className="user-nav__arrow"
      ></div>
      <UserNavItem nameIcon={faUser} text="Zaloguj się" />
      <UserNavItem nameIcon={faHeart} text="Obserwowane" />
      <UserNavItem nameIcon={faCartShopping} text="Koszyk" />
    </div>
  );
};
