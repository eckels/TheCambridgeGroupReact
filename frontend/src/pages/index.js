import * as React from "react"
import { Link } from "gatsby"

import "../styling/index.scss"

import CompassImage from "../img/compass-dots.jpg"

import Layout from "../templates/Layout"

const IndexPage = () => {
    return (
        <Layout navBool="true">
            <div id="home-header" style={{ backgroundImage: `url(${CompassImage})` }}>
                <div className="home-header-content">
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

        </Layout>
    )
}

export default IndexPage