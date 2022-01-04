import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import "../styling/index.scss"

import Layout from "../templates/Layout"
import ConnectSection from "../components/connect/ConnectSection"

import CompassImage from "../img/compass-dots.jpg"
import CareersBackground from "../img/bround6.jpg"
import CareersImage from "../img/careers.jpg"
import IvyLogo from "../img/ivy-logo.png"
import SampleLogo from "../img/demand-landscape.png"

const IndexPage = () => {

    const [mobileBool, updateMobileBool] = useState(0);

    useEffect(() => {
        const myWidth = window.innerWidth;
        const myHeight = window.innerHeight;
        if (myWidth <= 500 || (myWidth >= 500 && myHeight < 600)) {
            updateMobileBool(1);
        }
    });

    return (
        <Layout navBool="true">
            <div id="home-header" style={{ backgroundImage: `url(${CompassImage})`, height: (mobileBool == 1) ? window.innerHeight : '' }}>
                <div className="home-header-content" style={{ height: (mobileBool == 1) ? window.innerHeight : '' }}>
                    <div className="blurb">
                        <h2>Your partners in profitable growth</h2>
                        <Link to="/about"><button>How we do it</button></Link>
                    </div>
                </div>
            </div>

            <div className="section home-about">
                <div className="section-content home-about-content">
                    <div className="container">
                        <h1>Who we are</h1>
                        <h3>We are a boutique strategy consulting firm that has helped clients find profitable growth for over 45 years</h3>
                        <Link to="/about" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></Link>
                    </div>
                </div>
            </div>

            <div className="section home-capabilities">
                <div className="section-content home-capabilities-content">
                    <h1>Featured solutions</h1>
                    <p className="desc">With an exclusive focus on growth, we help clients think differently by looking at their business through the eyes of the customer rather than looking at the customer through the eyes of the business</p>
                    <div className="icon-grid-wrapper">
                        <div className="icon-grid">
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Demand Landscape</p>
                            </div></Link>
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Palate maps</p>
                            </div></Link>
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Brand value proposition</p>
                            </div></Link>
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Jobs to be done</p>
                            </div></Link>
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Consumer Demand Analysis (CDA)</p>
                            </div></Link>
                            <Link to="capabilities/featured-solutions/solution-item.html"><div className="icon">
                                <img src={SampleLogo} alt="" />
                                <p>Predictive models for targeting</p>
                            </div></Link>
                        </div>
                    </div>
                    <Link to="/capabilities"><button>See all capabilities</button></Link>
                </div>
            </div>

            <div className="home-careers-wrapper" style={{ backgroundImage: `url(${CareersBackground})` }}>
                <div className="section home-careers">
                    <div className="section-content home-careers-content">
                        <h1>Careers</h1>
                        <div className="centered-wrapper">
                            <div className="centered">
                                <div className="right">
                                    <img src={CareersImage} alt="TCG Careers" />
                                </div>
                                <div className="left">
                                    <div className="white-box">
                                        <div className="award">
                                            <img src={IvyLogo} alt="Ivy Exec logo" />
                                            <p>Voted one of the best firms to work for</p>
                                        </div>
                                        <p className="desc">Our “each of us and all of us” culture makes us a place where everyone wants to help you succeed</p>
                                    </div>
                                    <Link href="/careers" className="link-arrow-wrap"><p className="link-arrow-white">Find out what it takes</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ConnectSection />

        </Layout>
    )
}

export default IndexPage