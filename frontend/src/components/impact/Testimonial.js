import * as React from "react"

const Testimonial = ({ name, title, quote, personImage, companyLogo }) => {
    return (
        <div className="testimony">
            <div style="text-align: center;">
                <img src="img/briggs-gary.jpg" alt="" className="profile" />
            </div>
            <p className="quote">"We were trying to understand our brand around the world and understand what Facebook should focus on to improve... We are much more focused and having much greater impact as a result."</p>
            <div className="bottom">
                <div className="bar"></div>
                <p className="name">Gary Briggs</p>
                <p className="title">CMO - Facebook</p>
                <img src="img/facebook-logo.png" alt="" className="logo" />
            </div>
        </div>
    )
}

export default Testimonial