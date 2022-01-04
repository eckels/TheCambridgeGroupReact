import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import "../styling/capabilities.scss"

import Layout from "../templates/Layout"
import ConnectSection from "../components/connect/ConnectSection"

import CapabilitiesBackground from "../img/bround6.jpg"
import Arrows from "../img/arrows.svg"
import TempLogo from "../img/corporate-business-unit-strategy.png"

const CapabilitiesPage = () => {
    return (
        <Layout>
            <div className="section-header" style={{ backgroundImage: `url(${CapabilitiesBackground})` }}>
                <div className="section-container">
                    <h1>Capabilities</h1>
                </div>
            </div>

            <div className="mobile-sidebar-wrapper" id="sidebar-scroll-target">
                <div className="mobile-sidebar">
                    <select id="mobile-sidebar" style={{ backgroundImage: `url(${Arrows})` }}>
                        <option value="nothing">Select a capability to see...</option>
                        <option value="#section1">Corporate and business unit strategy</option>
                        <option value="#section2">Mergers and acquisitions</option>
                        <option value="#section3">Go-to-market activation</option>
                        <option value="#section4">Marketing strategy</option>
                        <option value="#section5">Innovation and design</option>
                        <option value="#section6">Pricing and promotion</option>
                        <option value="#section7">Digital strategy</option>
                        <option value="#section8">Organization and culture</option>
                        <option value="#section9">Demand Landscape</option>
                        <option value="#section10">Brand value proposition</option>
                        <option value="#section11">Palate maps</option>
                        <option value="#section12">Category diagnostic</option>
                        <option value="#section13">Jobs to be done</option>
                        <option value="#section14">Demand based forecasting</option>
                        <option value="#section15">Predictive models for targeting</option>
                        <option value="#section16">Consumer Demand Analysis (CDA)</option>
                    </select>
                </div>
            </div>

            <div className="capabilities-mega-wrapper" id="wrapper-target">

                <div className="capabilities-nav-wrapper">
                    <div className="capabilities-nav" id="capabilities-nav-target">
                        <div className="capabilities-section">
                            <p className="cap-header">Areas of expertise</p>
                            <p><a href="#section1" className="smooth">Corporate and business unit strategy</a></p>
                            <p><a href="#section2" className="smooth">Mergers and acquisitions</a></p>
                            <p><a href="#section3" className="smooth">Go-to-market activation</a></p>
                            <p><a href="#section4" className="smooth">Marketing strategy</a></p>
                            <p><a href="#section5" className="smooth">Innovation and design</a></p>
                            <p><a href="#section6" className="smooth">Pricing and promotion</a></p>
                            <p><a href="#section7" className="smooth">Digital strategy</a></p>
                            <p><a href="#section8" className="smooth">Organization and culture</a></p>
                        </div>
                        <div className="capabilities-section">
                            <p className="cap-header">Featured solutions</p>
                            <p><a href="#section9" className="smooth">Demand Landscape</a></p>
                            <p><a href="#section10" className="smooth">Brand value proposition</a></p>
                            <p><a href="#section11" className="smooth">Palate maps</a></p>
                            <p><a href="#section12" className="smooth">Category and brand diagnostic</a></p>
                            <p><a href="#section13" className="smooth">Jobs to be done</a></p>
                            <p><a href="#section14" className="smooth">Predictive models for targeting</a></p>
                            <p><a href="#section15" className="smooth">Consumer Demand Analysis (CDA)</a></p>
                        </div>
                    </div>
                </div>

                <div className="capabilities-content-wrapper" id="bottom-target">
                    <div className="capabilities-content">
                        <h1 style={{ marginTop: 0 }}>Areas of expertise</h1>
                        <div className="sub-bar"></div>
                        <div className="content-section">

                            <div className="capability" id="section1">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Corporate and business unit strategy</h4>
                                </div>
                                <p>We have a proven track record of uncovering transformational opportunities to unlock customer demand and helping our clients activate with precision to accelerate growth.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>
                            
                            <div className="capability" id="section2">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Mergers and acquisitions</h4>
                                </div>
                                <p>We advise corporate and private equity clients on creating value through acquisitions, joint ventures, strategic investments and alliances. We go beyond market data and trends to provide deep, proprietary insights regarding alignment of potential acquisition targets to highly profitable pockets of unmet demand.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section3">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Go-to-market activation</h4>
                                </div>
                                <p>In recent years, customers have fundamentally changed the ways they gather information, define their consideration set, engage with brands and make purchase decisions. We help companies design and activate their go-to-market and sales strategies across the “Demand Chain” with an unmatched degree of precision.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section4">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Marketing strategy</h4>
                                </div>
                                <p>We helps companies optimize marketing strategies by providing an unmatched understanding of current, emerging and latent customer demand. We blend deep customer insight, big data analytics and economic modeling to help our clients capitalize on profitable opportunities.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section5">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Innovation and design</h4>
                                </div>
                                <p>In order to win in the marketplace, companies must develop an unmatched understanding of customer demand prior to developing the supply to meet it. Alignment of supply with demand results in accelerated growth, enhanced customer loyalty and significant pricing power.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section6">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Pricing and promotion</h4>
                                </div>
                                <p>Pricing and promotion optimization can be one of the most powerful levers for driving profitable growth. Even within seemingly commoditized categories, we have consistently identified numerous opportunities to increase pricing power. Too many companies leave money on the table by failing to fully align their pricing and promotion strategies to underlying customer demand.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section7">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Digital strategy</h4>
                                </div>
                                <p>The digital revolution is reshaping the customer journey. To win in this evolving landscape, it is critical to understand how to capitalize on shifting digital behaviors and deliver the compelling, seamlessly integrated experience customers are seeking across touch points.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section8">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Organization and culture</h4>
                                </div>
                                <p>Having a well-designed growth strategy is just one piece of the puzzle. It is critical to implement the right organizational structure, practices and capabilities required to quickly detect and capitalize on the attractive opportunities. We also help align client organizations to a shared vision with unique employee value propositions and engagement strategies to attract and retain the best talent.</p>
                                <a href="capabilities/featured-solutions/expertise-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                        </div>
                        <h1>Featured solutions</h1>
                        <div className="sub-bar"></div>
                        <div className="content-section">

                            <div className="capability" id="section9">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Demand Landscape</h4>
                                </div>
                                <p>TCG’s Demand Landscape methodology has transformed the way the industry approaches segmentation, providing the foundation for identification of breakthrough growth opportunities across hundreds of clients over the years. Our established approach is always evolving to incorporate best-in-class targeting and activation methodologies.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section10">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Brand value proposition</h4>
                                </div>
                                <p>We use an iterative approach to building customer needs into a brand’s demand-driven value proposition and positioning. Our process ensures that the final proposition is differentiated enough to drive profit while also being enduring, measurable and insulated from the competition.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section11">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Palate maps</h4>
                                </div>
                                <p>Palate maps are an industry leading approach to quantify white spaces by uncovering the most unmet benefit and product-level attributes of ideal customer demand. Demand is measured against supply to highlight the largest white spaces at the benefit level and also at the product level. This allows us to quantify the unmet demand for detailed product and service level ideals. Across categories and industries our palate maps consistently uncover white spaces that unlock multi-year growth platforms.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section12">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Category and brand diagnostic</h4>
                                </div>
                                <p>As demand evolves, many category and brand owners struggle to identify the specific factors that drive their business’ performance. We take a comprehensive approach to identifying both the external and internal drivers and measure the impact of each driver's contribution to growth or decline. We apply a regression-based approach, summarize how performance is likely to evolve and distill the strategic implications needed to accelerate growth.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section13">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Jobs to be done</h4>
                                </div>
                                <p>A Job-to-be-done (JTBD) is a statement of the progress a person is trying to make in a given circumstance. Leveraging JTBD can enable an entirely re-imagined innovation process that creates a sharper understanding of what is needed to acquire and grow with current and new customers, often leading to breakthrough innovation.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section14">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Predictive models for targeting</h4>
                                </div>
                                <p>Our predictive modeling approach enables precise, targeted marketing activations. Building predictive models makes target segments immediately actionable within a client’s CRM, a media panel, via external look alike modeling or at the U.S. household level. TCG’s modeling outcomes enable our clients to deliver the right message to the right customer at the right time.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                            <div className="capability" id="section15">
                                <div className="capability-header">
                                    <img src={TempLogo} alt="" />
                                    <h4>Consumer Demand Analysis (CDA)</h4>
                                </div>
                                <p>Consumer Demand Analysis (CDA) leverages highly customizable simulation exercises to model future scenario impacts in a given market, category, or shopping context. We simulate consumer decision making by using economic choice theory which puts consumers through simulations to ask what, if any options, they would select and/or purchase among a set of offerings. We have found that leveraging realistic, choice-based scenarios is the best way to project future scenarios that incorporate consumer input, competition, and real-world trade-offs. The resulting outputs enable in-depth quantification of the economics of each opportunity area.</p>
                                <a href="capabilities/featured-solutions/solution-item.html" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <ConnectSection />

        </Layout>
    )
}

export default CapabilitiesPage