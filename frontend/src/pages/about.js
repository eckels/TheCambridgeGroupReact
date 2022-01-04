import * as React from "react"
import { Link } from "gatsby"

import "../styling/about.scss"

import Layout from "../templates/Layout"
import ConnectSection from "../components/connect/ConnectSection"

import AboutBackground from "../img/bround3.jpg"
import AwardBackground from "../img/bround6.jpg"
import ForbesLogo from "../img/forbes.png"
import NielsenLogo from "../img/cpn-gray.png"

const AboutPage = () => {
    return (
        <Layout>
            <div className="section-header" style={{ backgroundImage: `url(${AboutBackground})` }}>
                <div className="section-container">
                    <h1>About us</h1>
                </div>
            </div>

            <div className="section page-desc page-desc-about">
                <div className="section-content page-desc-content page-desc-content-about">
                    <h2>Experts in helping clients profitably grow their businesses</h2>
                    <p>Since 1975, The Cambridge Group has helped clients develop and execute strategies that are driven by a superior understanding of profitable demand.  Headquartered in Chicago, The Cambridge Group’s strategy consultants apply Demand Strategy across global industries, enabling clients to align their infrastructure, businesses, and resources to meet marketplace demand in a way that is meaningfully differentiated from their competitors<br /><br />After 10 years as a division of Nielsen, the Partners of The Cambridge Group completed a management buyout in early 2019 to become an independent company again, providing a greater opportunity to invest in our capabilities to serve clients.  We remain a Connected Partner of Nielsen, providing superior access to Nielsen's data and measurement capabilities</p>
                    <Link to="/about/our-team" className="link-arrow-wrap"><p className="link-arrow">Meet the team</p></Link>
                </div>
            </div>

            <div className="award-section-wrapper" style={{ backgroundImage: `url(${AwardBackground})` }}>
                <div className="section award-section">
                    <div className="section-content award-section-content">
                        <div className="award">
                            <img src={ForbesLogo} alt="America's best management consulting firms badge" className="logo" />
                            <div className="text">
                                <h3>We are proud to be recognized as one of America's Best Management Consulting Firms in the following areas</h3>
                                <div className="categories">
                                    <div className="category">
                                        <p>Strategy</p>
                                    </div>
                                    <div className="category">
                                        <p>Innovation and Growth</p>
                                    </div>
                                    <div className="category">
                                        <p>Marketing Brand & Pricing</p>
                                    </div>
                                    <div className="category">
                                        <p>Consumer Goods and Retail</p>
                                    </div>
                                    <div className="category">
                                        <p>Data Analytics and Big Data</p>
                                    </div>
                                </div>
                                <a href="posts/insights/post-item.html" className="link-arrow-wrap"><p className="link-arrow">Read about the award</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section difference-section">
                <div className="section-content difference-section-content">
                    <h1>The Cambridge difference</h1>

                    <div className="step-wrapper">

                        <div className="step">
                            <div className="text">
                                <h3>Exclusive focus on growth</h3>
                                <p>We specialize in developing demand-driven strategies that maximize our clients’ growth and profitability</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="text">
                                <h3>Projects led by experienced, senior consultants</h3>
                                <p>Our teams are staffed and led by senior individuals who are actively involved throughout the projects they lead</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="text">
                                <h3>Unique approach</h3>
                                <p>We help each client think differently by looking at their business through the eyes of the customer rather than looking at the customer through the eyes of the business</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="text">
                                <h3>Actionable recommendations and detailed blueprints</h3>
                                <p>We go beyond strategic recommendations to develop clear, actionable programs that are tailored to your business capabilities and resources. We partner with clients from strategy to execution to ensure successful implementations</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="text">
                                <h3>Proprietary intellectual capital</h3>
                                <p>We have developed a unique breadth of experience that fosters new insight and drives our demand strategies. We have tested and refined our proprietary methodologies for more than 40 years</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="text">
                                <h3>Consistent results</h3>
                                <p>We have a track record of creating opportunities for profitable growth across a wide range of categories -even in categories where growth is flat or declining</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="section nielsen-section">
                <div className="section-content nielsen-section-content">
                    <div className="grid-wrapper">
                        <div className="grid">
                            <div className="right">
                                <img src={NielsenLogo} alt="Nielsen Connected Partner" />
                            </div>
                            <div className="left">
                                <h2>Nielsen Connected Partner</h2>
                                <p>After 10 years as a Nielsen subsidiary, TCG's leadership team conducted a management buyout in 2019. We continue to maintain a close working relationship with Nielsen as a Nielsen Connected Partner. Our growth strategy frameworks, coupled with Nielsen data and analytics, provide a powerful combination for our clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ConnectSection />

        </Layout>
    )
}

export default AboutPage