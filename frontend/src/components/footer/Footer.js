import * as React from "react"
import { Link } from "gatsby"

import TCGLogo from "../../img/tcg-logo-hz-white.png"
import LinkedInLogo from "../../img/linkedin.svg"

const Footer = () => {
    const curr_date = new Date().getFullYear();

    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <img src={TCGLogo} alt="The Cambridge Group Logo" className="logo" />
                <div className="top-footer">
                    <div className="top-footer-child">
                        <p className="header">Headquarters</p>
                        <p>10 S. Wacker Dr. <br />Suite 3550 <br />Chicago, IL 60606</p>
                    </div>
                    <div className="top-footer-child">
                        <p className="header">Contact</p>
                        <p>(312) 425-3600 <br /><a href="mailto:info@thecambridgegroup.com">info@thecambridgegroup.com</a></p>
                    </div>
                </div>
                <div className="middle-footer">
                    <div className="middle-content">
                        <div className="link-list">
                            <Link to="/about">About</Link>
                            <Link to="/capabilities">Capabilities</Link>
                            <Link to="/impact">Impact</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/connect">Connect</Link>
                        </div>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/company/the-cambridge-group_2/" target="_blank"><img src={LinkedInLogo} alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p className="left"><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p className="right">&copy; <span id="date-target">{curr_date}</span> The Cambridge Group</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer