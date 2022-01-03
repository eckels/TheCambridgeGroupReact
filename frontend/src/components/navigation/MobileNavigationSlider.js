import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import ArrowIcon from "../../img/arrow.svg"

const MobileNavigationSlider = ({ open }) => {

    const arrows = ['about-arrow', 'capabilities-arrow'];
    const dropdowns = ['about-drop', 'capabilities-drop'];

    const [sliderOpen, updateSliderOpen] = useState(0);

    useEffect(() => {
        if (open == 1) {
            updateSliderOpen(1);
        } else {
            updateSliderOpen(0);
        }
    });

    function arrowClicked(index) {
        let clicked = document.getElementById(arrows[index]);
        if (clicked.classList.contains('dropdown-arrow-active')) {
            closeDropdown(index);
        } else {
            for (var i = 0; i < arrows.length; i++) {
                closeDropdown(i);
            }
            openDropdown(index);
        }
    };
    
    function openDropdown(index) {
        let arrow = document.getElementById(arrows[index]);
        let dropdown = document.getElementById(dropdowns[index]);
        arrow.classList.add('dropdown-arrow-active');
        let dropdownheight = document.getElementById(dropdowns[index]).scrollHeight + 'px';
        dropdown.style.maxHeight = dropdownheight;
        dropdown.style.marginBottom = '8px';
    };
    
    function closeDropdown(index) {
        let arrow = document.getElementById(arrows[index]);
        let dropdown = document.getElementById(dropdowns[index]);
        arrow.classList.remove('dropdown-arrow-active');
        dropdown.style.maxHeight = '';
        dropdown.style.marginBottom = '0px';
    };

    return (
        <div className="mobile-nav-slide-wrapper">
            <div className="mobile-nav-slide" style={{ left: (sliderOpen == 0) ? '' : 0 }}>
                <div className="body-nav">
                    <div className="list-item">
                        <div className="clearfix"><Link to="/about" className="list-link">About</Link><img src={ArrowIcon} alt="drowndown menu" className="dropdown-arrow" id="about-arrow" onClick={() => arrowClicked(0)} /></div>
                        <div className="nav-dropdown" id="about-drop">
                            <Link to="/about/our-team">Our team</Link>
                            <Link to="/posts">News and insights</Link>
                            <Link to="/about/books">Books</Link>
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="clearfix"><Link to="/capabilities" className="list-link">Capabilities</Link><img src={ArrowIcon} alt="drowndown menu" className="dropdown-arrow" id="capabilities-arrow" onClick={() => arrowClicked(1)} /></div>
                        <div className="nav-dropdown" id="capabilities-drop">
                            <p style={{ paddingTop: 0 }}>Areas of Expertise</p>
                                <a href="capabilities/featured-solutions/solution-item.html">Corporate and business unit strategy</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Mergers and acquisitions</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Go-to-market activation</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Marketing strategy</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Innovation and design</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Pricing and promotion</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Digital strategy</a>
                                <a href="capabilities/featured-solutions/solution-item.html">Organization and culture</a>
                            <p>Featured Solutions</p>
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
                    <div className="list-item">
                        <div className="clearfix"><Link to="/impact" className="list-link">Impact</Link></div>
                    </div>
                    <div className="list-item">
                        <div className="clearfix"><Link to="/careers" className="list-link">Careers</Link></div>
                    </div>
                    <div className="list-item">
                        <div className="clearfix"><Link to="/connect" className="list-link">Connect</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigationSlider