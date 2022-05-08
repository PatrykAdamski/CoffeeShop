import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../logo/Logo';
import { Accordion } from '../accordion/Accordion';

export const Footer = () => {
  const footerAccordion = [
    {
      title: 'Informacje',
      listItems: ['Strona główna', 'O nas', 'Regulamin'],
    },
    {
      title: 'Konto',
      listItems: ['Ustawienia konta'],
    },
    {
      title: 'Kontakt',
      listItems: ['Formularz kontaktowy', 'Dane kontaktowe'],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__top-part">
        <div className="footer__logo-container">
          <Logo></Logo>
          <p>Najlepsza kawa w polsce.</p>
        </div>
        <div className="footer__accordion--mobile-visible">
          <Accordion data={footerAccordion}></Accordion>
        </div>
        <div className="footer--desktop-visible">
          {footerAccordion.map((item) => {
            return (
              <div key={item.title} className="footer__column">
                <p className="footer__title">{item.title}</p>
                <ul className="footer__list">
                  {item.listItems.map((el) => {
                    return (
                      <a key={el} className="footer__item" href="/#">
                        {el}
                      </a>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
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
