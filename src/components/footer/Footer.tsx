import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../logo/Logo";
import { Accordion } from "../accordion/Accordion";

export const Footer = () => {
  const footerAccordion = [
    {
      title: "Informacje",
      listItems: ["Strona główna", "O nas", "Regulamin"],
    },
    {
      title: "Konto",
      listItems: ["Ustawienia konta"],
    },
    {
      title: "Kontakt",
      listItems: ["Formularz kontaktowy", "Dane kontaktowe"],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__top-part">
        <div className="footer__logo-container">
          <Logo></Logo>
          <p>Najlepsza kawa w polsce.</p>
        </div>
        <Accordion data={footerAccordion}></Accordion>
      </div>

      <div className="footer__bottom-part">
        <div className="footer__social-container">
          <div className="footer__circle">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </div>
          <div className="footer__circle">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </div>
        </div>
        <p className="footer__copyright">
          &copy; Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
