import * as React from "react"

const BookDetailed = ({ bookImage, bookName, bookSubHeader, bookDescription, bookLink }) => {
    return (
        <div className="book-item">
            <div className="left">
                <img src="../img/book.jpg" alt="" />
            </div>
            <div className="right">
                <h4>Optimizing Growth</h4>
                <p className="sub-header">Predictive and profitable strategies to understand demand and outsmart your competitors</p>
                <p className="desc">In today’s ever more uncertain, social media driven, customer-centric business environment, it has never been harder to achieve profitable growth. This groundbreaking book delivers a proven approach to leveraging the latest Big Data capabilities to help you achieve organic, sustainable revenue growth</p>
                <a href="" className="link-arrow-wrap"><p className="link-arrow">Learn more</p></a>
            </div>
        </div>
    )
}

export default BookDetailed