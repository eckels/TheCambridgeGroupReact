import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import MobileNavigationSlider from "./MobileNavigationSlider"

import TCGLogoColor from "../../img/tcg-logo-icon-color.png"
import TCGLogoWhite from "../../img/tcg-logo-icon-white.png"

import MenuIcon from "../../img/menu.svg"
import MenuIconWhite from "../../img/menu-white.svg"
import ExitIcon from "../../img/exit.svg"

const MobileNavigation = ({ homepageBool, scrollBool }) => {
    let homeNav = (homepageBool == 'true') ? true : false;
    let headerClass = (homeNav) ? "mobile-nav-transparent" : "";
    let headerId = {homeNav} ? "mobile-homepage" : "";

    const [navTop, updateNavTop] = useState(1);
    const [navOpen, updateNavOpen] = useState(0);

    useEffect(() => {
        if (scrollBool == 1 && navOpen == 0) {
            updateNavTop(0);
        } else if (navOpen == 1) {
            updateNavTop(0);
        } else {
            updateNavTop(1);
        }
    });

    const toggleNavigation = () => {
        if (navOpen == 0) {
            updateNavOpen(1);
            document.getElementById('menu1').style.visibility = 'hidden';
            document.getElementById('menu2').style.visibility = 'hidden';
            document.getElementById('menu1').style.opacity = 0;
            document.getElementById('menu2').style.opacity = 0;

            document.getElementById('menu-close-target').style.visibility = 'visible';
            document.getElementById('menu-close-target').style.opacity = 0.5;

            document.getElementById('slide-shad').style.visibility = 'visible';
            document.getElementById('slide-shad').style.opacity = 0.75;
        } else {
            updateNavOpen(0);
            document.getElementById('menu1').style.visibility = '';
            document.getElementById('menu2').style.visibility = '';
            document.getElementById('menu1').style.opacity = '';
            document.getElementById('menu2').style.opacity = '';

            document.getElementById('menu-close-target').style.visibility = 'hidden';
            document.getElementById('menu-close-target').style.opacity = 0;

            document.getElementById('slide-shad').style.visibility = '';
            document.getElementById('slide-shad').style.opacity = '';
        }
    };

    return (
        <>
            <nav className={`mobile-nav ${(navTop == 1) ? headerClass : ''}`} id={headerId}>
                <div className="mobile-nav-bar">
                    <div className="content-bar clearfix">
                        <Link to="/"><img src={TCGLogoColor} className="logo logo-color" alt="The Cambridge Group Logo" /></Link>
                        <Link to="/"><img src={TCGLogoWhite} className="logo logo-white" alt="The Cambridge Group Logo" /></Link>
                        <div className="nav-right">

                            <div className="nav-right-container">
                                <img src={MenuIcon} className="menu menu-color menu-open" alt="menu" id="menu1" onClick={toggleNavigation} />
                                <img src={MenuIconWhite} className="menu menu-white menu-open" alt="menu" id="menu2" onClick={toggleNavigation} />
                                <img src={ExitIcon} className="menu menu-close" alt="close menu" id="menu-close-target" onClick={toggleNavigation} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileNavigationSlider open={navOpen} />
            <div className="slide-shader" id='slide-shad' onClick={toggleNavigation}></div>
        </>
    )
}

export default MobileNavigation