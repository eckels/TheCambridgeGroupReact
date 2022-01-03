import * as React from "react"

const BookCarousel = ({ bookImage, bookName, bookSubHeader }) => {
    return (
        <li className="glide__slide">
            <div className="book-container">
                <img src="img/book.jpg" alt="" />
                <div className="desc-wrapper">
                    <p className="title">Optimizing growth</p>
                    <p className="desc">Predictive and profitable strategies to understand demand and outsmart your competitors.</p>
                    <a href="about/books.html"><button>Learn more</button></a>
                </div>
            </div>
        </li>
    )
}

export default BookCarousel