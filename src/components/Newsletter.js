import { Route, Link, Switch } from 'react-router-dom';
import NewsletterSignInForm from './NewsletterSignInForm';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import '../styles/Newsletter.css'

const Newsletter = () => {
    const [isClicked, setIsCLicked] = useState(false);

    const handleClick = () => {
        setIsCLicked(prevValue => (!prevValue));
    }

    return (
        <div className="newsletter__container">
            < Switch >
                < Route path="/signin">
                    < NewsletterSignInForm />
                </Route>
                < Route path="/">
                    <button onClick={handleClick} className="newsletterShowing__button welcomeAnimation">
                        <Link to="/signin"><p>Sign In</p></Link>
                    </button>
                </Route>
            </ Switch >
        </div>)
}

export default Newsletter;