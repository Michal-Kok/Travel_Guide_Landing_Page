import '../styles/Newsletter.css';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const NewsletterSignInForm = () => {

    useEffect(() => {
        const newElements = document.querySelectorAll('.newsletterForm');

        gsap.from(newElements, { y: 50, opacity: 0.2, duration: 0.5, ease: "easeInOut", });
    });


    return (
        <div className="newsletterForm">
            <form className="newsletterForm__form" action="submit">
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