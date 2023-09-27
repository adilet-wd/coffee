import React from 'react';
import { useState, useEffect } from 'react';
import "./Footer.scss"

// Мобильный и десктоп футер
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';


const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Здесь вы можете определить пороги ширины экрана и решить, что рендерить
    if (windowWidth > 768) {
        return <FooterDesktop />;
    } else if (windowWidth > 0) {
        return <FooterMobile />;
    }
}
export default Footer;
