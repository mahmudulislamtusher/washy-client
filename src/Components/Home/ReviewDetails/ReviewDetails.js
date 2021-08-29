import React from 'react';
import './ReviewDetails.css'

const ReviewDetails = ({review}) => {
    return (
        <div className="col-md-6 col-lg-4 mt-3">
            <div className="card card-body reviewCard py-3 mx-0">
                <div className="identity py-3">
                    <img className="card-img review-img mr-3" src={review.img} alt=""/>
                    <div className="info">
                        <h5>{review.name}</h5>
                        <p className="m-0">{review.company}</p>
                    </div>
                </div>
                <div className="text-secondary">
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;