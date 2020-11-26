import '../styles/Newsletter.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

const NewsletterSignInForm = ({ handleClick }) => {

    useEffect(() => {
        const formElements = document.querySelectorAll('.newsletterForm');

        gsap.from(formElements, { y: 50, opacity: 0.2, duration: 0.5, ease: "easeInOut", });
    });
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        handleClick();
        history.push("/signed");
    }


    return (
        <div className="newsletterForm">
            <form className="newsletterForm__form" action="submit" onSubmit={onSubmit}>
                <input className="newsletterForm__input"
                    type="text"
                    placeholder="ENTER YOUR NAME" />
                <input className="newsletterForm__input"
                    type="text"
                    placeholder="ENTER YOUR EMAIL ADRESS" />
                <div className="newsletterForm__buttonContainer">
                    <button className="newsletterForm__submitButton">subscribe</button>
                </div>
            </form>
        </div>)
}

export default NewsletterSignInForm;