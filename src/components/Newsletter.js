import { Route, Link, Switch } from 'react-router-dom';
import NewsletterSignInForm from './NewsletterSignInForm';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import '../styles/Newsletter.css'

const Newsletter = () => {

    const [refreshKey, setRefreshKey] = useState(false);

    const handleClick = () => {
        setRefreshKey(prev => !prev);
    }

    useEffect(() => {
        gsap.from('.newsletter__biggerButton', { y: 50, opacity: 0.2, duration: 0.5, ease: "easeInOut", });
    });

    return (
        <div className="newsletter__container">
            < Switch >
                < Route path="/signin">
                    < NewsletterSignInForm handleClick={handleClick} />
                </Route>
                <Route path="/signed">
                    <button onClick={handleClick} className="newsletter__biggerButton ">
                        <Link to="/"><p>thank you!</p></Link>
                    </button>
                </Route>
                < Route path="/">
                    <button className="newsletter__biggerButton ">
                        <Link to="/signin"><p>Sign In</p></Link>
                    </button>
                </Route>
            </ Switch >
        </div>)
}

export default Newsletter;