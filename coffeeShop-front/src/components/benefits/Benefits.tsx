import React from 'react';
import {
  faPercent,
  faTruckFast,
  faMugSaucer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__single">
          <FontAwesomeIcon
            className="benefits__icon"
            icon={faMugSaucer}
          ></FontAwesomeIcon>
          <h3 className="benefits__title">Świeżo palona kawa</h3>
          <p className="benefits__subtitle">z najlepszej jakości ziaren</p>
        </div>
        <div className="benefits__single">
          <FontAwesomeIcon
            className="benefits__icon"
            icon={faTruckFast}
          ></FontAwesomeIcon>
          <h3 className="benefits__title">Szybka dostawa</h3>
          <p className="benefits__subtitle">Już w 24h</p>
        </div>
        <div className="benefits__single">
          <FontAwesomeIcon
            className="benefits__icon"
            icon={faPercent}
          ></FontAwesomeIcon>
          <h3 className="benefits__title">Atrakcyjne rabaty</h3>
          <p className="benefits__subtitle">dla stałych klientów</p>
        </div>
      </div>
    </section>
  );
};
