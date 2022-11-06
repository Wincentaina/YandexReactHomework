import React from 'react';
import s from "./Review.module.css"
import Rating from "../Rating/Rating";

const Review = ({reviews}) => {
    return (
        <div className={s.review}>
            <div className={s.top_block}>
                <p className={s.username}>{reviews.user.name}</p>
                <Rating number={reviews.rating} />
            </div>
            <div className={s.review_text}>
                {reviews.text}
            </div>
        </div>
    );
};

export default Review;