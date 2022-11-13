import React, {useEffect, useState} from 'react';
import s from "./Review.module.css"
import Rating from "../Rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {loadReviewsIfNotExist} from "../../store/review/loadReviewsIfNotExist";
import {selectReviewById, selectReviews} from "../../store/review/selectors";

const Review = ({reviewId}) => {

    const [review, setReview] = useState({
        name: "",
        rating: "",
        text: "",
        id: ""
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadReviewsIfNotExist(reviewId))
    }, [])

    let rev = useSelector((state) => selectReviewById(state, reviewId))

    useEffect(() => {
        setReview((prev) => {
            let res = {...rev}
            return (
                res
            )
        })
    }, [rev])

    return (
        <div className={s.review}>
            <div className={s.top_block}>
                <p className={s.username}>{review.name}</p>
                <Rating number={review.rating}/>
            </div>
            <div className={s.review_text}>
                {review.text}
            </div>
        </div>
    );
};

export default Review;