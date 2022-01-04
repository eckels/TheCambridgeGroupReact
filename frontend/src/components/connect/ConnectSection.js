import * as React from "react"
import { Link } from "gatsby"

const ConnectSection = () => {
    return (
        <div className="section connect-section">
            <div className="section-content connect-section-content">
                <h1>Connect</h1>
                <p className="desc">We'd love to help you think through your growth challenges</p>
                <Link to="/connect"><button>Get in touch</button></Link>
            </div>
        </div>
    )
}

export default ConnectSection