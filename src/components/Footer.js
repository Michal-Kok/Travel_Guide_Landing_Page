import "../styles/Footer.css";
import React from 'react';
import { ReactComponent as GithubSVG } from "../img/GithubSVG.svg";
const Footer = () => {
    return (
        <div className="footer__container">
            <p className="footer__madeByMe">Made by Michał Kok</p>
            <div className="footer__link">
                <p className="footer__link__description">Click here and see whole code!</p>
                <a href='https://github.com/Michal-Kok/Travel_Guide_Landing_Page/tree/Master' className="footer__link__SVGContainer">
                    < GithubSVG />
                </a>
            </div>
        </div>
    )
}

export default Footer;