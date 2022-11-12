import React, {useEffect} from 'react';
import s from "./InfoPage.module.css"
import OneBook from "../../components/OneBook/OneBook";
import Review from "../../components/Review/Review";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {loadReviewsIfNotExist} from "../../store/review/loadReviewsIfNotExist";
import {selectReviewById, selectReviews} from "../../store/review/selectors";

const InfoPage = () => {

    const {bookId} = useParams()
    const book_selected = useSelector((state) => selectBookById(state, bookId))
    const reviews = book_selected.reviews

    let elements = reviews.map((item) => {
        return (<Review reviewId={item} key={item}/>)
    })

    return (
        <div className={s.info}>
            <div className={s.top}>
                <OneBook info={book_selected}/>
                <div className={s.annotation}>
                    <p className={s.an_title}>Аннотация</p>
                    <p>{book_selected.annotation}</p>
                </div>
            </div>
            <div className={s.reviews}>
                {elements}
            </div>
        </div>
    );
};

export default InfoPage;