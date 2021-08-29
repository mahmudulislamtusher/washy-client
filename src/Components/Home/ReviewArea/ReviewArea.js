import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const ReviewArea = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('https://afternoon-sands-85438.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className="py-2">
            <h2 className="brand-text brand-primary text-center">Client <span className="brand-secondary">Feedback</span></h2>
            <div className="card-deck py-5 row">
                {
                    reviews.map(review => <ReviewDetails key={review._id} review={review}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default ReviewArea;