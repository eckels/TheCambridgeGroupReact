import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const RepresentativeClients = ({ sectionName, sectionDescription, linkBool }) => {
    return (
        <div className="section home-clients">
            <div className="section-content home-clients-content">
                <h1>Representative clients</h1>
                <p className="desc">Transformational impact is what keeps leading firms across industries and global markets coming back. Repeat clients drive 85% of our revenue</p>
                <div className="logo-grid-wrapper">
                    <div className="logo-grid">
                        <img src="img/coca-cola.png" alt="Coca Cola Logo" />
                        <img src="img/facebook.png" alt="Facebook Logo" />
                        <img src="img/kelloggs.png" alt="Kelloggs Logo" />
                        <img src="img/cbs.png" alt="_ Logo" />
                        <img src="img/twitter.png" alt="_ Logo" />
                        <img src="img/johnson-johnson.png" alt="_ Logo" />
                        <img src="img/allstate.png" alt="_ Logo" />
                        <img src="img/nestle.png" alt="_ Logo" />
                    </div>
                </div>
                <a href="impact.html#testimonials" className="link-arrow-wrap"><p className="link-arrow-white">Read client testimonials</p></a>
            </div>
        </div>
    )
}

export default RepresentativeClients