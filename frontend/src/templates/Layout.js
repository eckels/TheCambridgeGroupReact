import React, { useState, useEffect } from 'react';

import DesktopNavigation from "../components/navigation/DesktopNavigation"
import MobileNavigation from "../components/navigation/MobileNavigation"
import Footer from "../components/footer/Footer"
import FooterCode from "../components/FooterCode"

import '../styling/index.css'

const Layout = ({ navBool, children }) => {
    const [scrollBool, updateScrollBool] = useState(0);
    let navDisplacement = (window.innerWidth > 1000) ? 78 : 60;

    useEffect(() => {
        const handleScroll = () => {
            navDisplacement = (window.innerWidth > 1000) ? 78 : 60;
            if (window.pageYOffset > navDisplacement) {
                updateScrollBool(1);
            } else {
                updateScrollBool(0);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollBool]);
    
    return (
        <>
            <DesktopNavigation homepageBool={navBool} scrollBool={scrollBool} />
            <MobileNavigation homepageBool={navBool} scrollBool={scrollBool} />

            {children}

            <Footer />
            <FooterCode />
        </>
    )
}

export default Layout