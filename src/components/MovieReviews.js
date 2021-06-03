// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return(<div
    className = "review-list">
{reviews.map(Review)}
    </div>)
}
const Review = ({title, headline}) => {
    return (
        <div className = "review">
            {title} {headline}
        </div>
    )
}
export default MovieReviews;
