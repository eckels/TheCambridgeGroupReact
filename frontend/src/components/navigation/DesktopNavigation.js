import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import TCGLogoIcon from "../../img/tcg-logo-icon-color.png"
import TCGLogoHome from "../../img/tcg-logo-hz-white.png"
import TCGLogoHeader from "../../img/tcg-logo-hz-color.png"

const DesktopNavigation = ({ homepageBool, scrollBool }) => {
    let homeNav = (homepageBool == 'true') ? true : false;
    let headerClass = (homeNav) ? "desktop-nav-transparent" : "desktop-nav-header";
    let headerId = {homeNav} ? "homepage" : "headerpage";

    const [navTop, updateNavTop] = useState(1);

    useEffect(() => {
        if (scrollBool == 1) {
            updateNavTop(0);
        } else {
            updateNavTop(1);
        }

        var links = document.getElementsByClassName('link-trigger');

        for (var i = 0; i < links.length; i++) {
            (function(index) {
                links[index].addEventListener('touchstart', function(e) {
                    if (links[index].classList.contains('mobile-hover')) {
                        return true;
                    } else {
                        for (var j = 0; j < links.length; j++) {
                            links[j].classList.remove('mobile-hover');
                        }
                        links[index].classList.add('mobile-hover');
                        e.preventDefault();
                        return false;
                    }
                })
           })(i);
        }
    });

    return (
        <nav className={`desktop-nav ${(navTop == 1) ? headerClass : ''}`} id={headerId}>
            <div className="nav-wrap clearfix">
                <Link to="/"><img src={TCGLogoIcon} className="logo" alt="The Cambridge Group Logo" /></Link>
                <Link to="/"><img src={ (homeNav) ? TCGLogoHome : TCGLogoHeader } className="logo-white" alt="The Cambridge Group Logo" /></Link>
                <div className="link-wrap">
                    <ul>
                        <li className="link-trigger">
                            <Link className="primary-link" to="/about">About</Link>
                            <div className="link-dropdown">
                                <Link to="/about/our-team">Our team</Link>
                                <Link to="/posts">News and insights</Link>
                                <Link to="/about/books">Books</Link>
                            </div>
                        </li>
                        <li className="link-trigger">
                            <Link className="primary-link" to="/capabilities">Capabilities</Link>
                            <div className="link-dropdown link-dropdown-big clearfix">
                                <div className="link-category">
                                    <p>Areas of Expertise</p><div className="bar"></div>
                                    <div className="link-grid">
                                        <a href="capabilities/featured-solutions/solution-item.html">Corporate and business unit strategy</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Mergers and acquisitions</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Go-to-market activation</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Marketing strategy</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Innovation and design</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Pricing and promotion</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Digital strategy</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Organization and culture</a>
                                    </div>
                                </div>
                                <div className="link-category">
                                    <p>Featured Solutions</p><div className="bar"></div>
                                    <div className="link-grid">
                                        <a href="capabilities/featured-solutions/solution-item.html">Demand Landscape</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Brand value proposition</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Palate maps</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Category diagnostic</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Jobs to be done</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Demand based forecasting</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Predictive models for targeting</a>
                                        <a href="capabilities/featured-solutions/solution-item.html">Consumer Demand Analysis (CDA)</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="primary-link" to="/impact">Impact</Link>
                        </li>
                        <li>
                            <Link className="primary-link" to="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link className="primary-link" to="/connect">Connect</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DesktopNavigation
