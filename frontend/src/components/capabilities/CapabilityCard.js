import * as React from "react"

const CapabilityCard = ({ capabilityIcon, capabilityName, capabilityDescription }) => {
    return (
        <div className="capability" id="section1">
            <div className="capability-header">
                <img src="img/corporate-business-unit-strategy.png" alt="" />
                <h4>Corporate and business unit strategy</h4>
            </div>
            <p>We have a proven track record of uncovering transformational opportunities to unlock customer demand and helping our clients activate with precision to accelerate growth.</p>
            <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
        </div>
    )
}

export default CapabilityCard