import React from 'react';
import 'boxicons';
import {SimpleWaves} from '../Waves'

function Footer() {
  return(
    <footer className="footer section">
      <SimpleWaves classnames="simpleSvg" />
      <div className="footer__container bd-grid">
        <h1 className="footer__title">Mohamed Habib ALOUNI</h1>
        <p className="footer__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting
        </p>
        <div className="footer__social">
          <a href="#github" className="footer__link"><box-icon type='logo' name='github' color="white" ></box-icon></a>
          <a href="#linkedin" className="footer__link"><box-icon name='linkedin' type='logo' color="white" ></box-icon></a>
          <a href="#whatsapp" className="footer__link"><box-icon name='whatsapp' type='logo' color="white" ></box-icon></a>
          <p className="footer__copy">Made By Mohamed Habib Alouani AKA Envy </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;