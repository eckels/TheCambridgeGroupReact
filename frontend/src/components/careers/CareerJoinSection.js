import * as React from "react"

const CareerJoinSection = ({ joinHeader, joinDescription, joinImage }) => {
    return (
        <div className="section careers-section careers-apply">
            <div className="section-content careers-section-content careers-apply-content">
                <h1>Where to apply</h1>
                <div className="wrapper left-text">
                    <div className="text">
                        <p className="sub">Join the team.</p>
                        <p>Most of our hiring is done via on-campus recruiting.<br /><br />If you are attending a non-core school however, or are an experienced hire, please contact our recruiting coordinator.</p>
                        <a href="careers/apply.html"><button>Apply now</button></a>
                    </div>
                    <div className="image">
                        <img src="img/careers.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerJoinSection