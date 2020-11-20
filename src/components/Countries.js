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
        gsap.registerPlugin(scrollTrigger);
        const elements = document.querySelectorAll('.country');
        elements.forEach(element => {
            gsap.to(element, {
                height: '22rem', duration: 0.5, scrollTrigger: {
                    trigger: element,
                    start: '13% 65%',
                }
            });
        });
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