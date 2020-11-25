import Country from './Country';
import '../styles/Countries.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import IcelandJPG from '../img/iceland.jpg';

const Countries = () => {

    const countriesInformation = [
        {
            name: 'Iceland',
            description: "Discovering Iceland's nature has never been that easy. We will make your trip memorable.",
        },
        {
            name: 'Lithuania',
            description: "Visit the geographical center of Europe. Travelling here creates best memories.",
        },
        {
            name: 'France',
            description: "Enjoy the best restaurants in the world. We can guarantee, you will love this country.",
        }
    ];

    useEffect(() => {

        if (window.screen.orientation.type == ! "landscape-primary" || window.innerWidth < 600) {
            gsap.registerPlugin(scrollTrigger);
            const elements = document.querySelectorAll('.country__container');
            const images = document.querySelectorAll('.country__photo');

            elements.forEach((element, index) => {
                gsap.from(images[index], {
                    display: 'none', opacity: 0, duration: 0.5, delay: 0.4, scrollTrigger: {
                        trigger: element,
                        start: '15% 50%'
                    }
                });

                gsap.to(element.children, {
                    height: '100%', duration: 0.5, scrollTrigger: {
                        trigger: element,
                        start: '15% 50%',
                    }
                });
            });
        }
    });

    const countriesTable = countriesInformation.map((country, index) => (
        <Country key={index} name={country.name} description={country.description} src={IcelandJPG} />
    ));


    return (
        <div className="countries__container">
            {countriesTable}
        </div>)
}

export default Countries;