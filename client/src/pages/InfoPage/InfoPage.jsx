import React, {useEffect, useState} from 'react';
import s from "./InfoPage.module.css"
import OneBook from "../../components/OneBook/OneBook";
import Review from "../../components/Review/Review";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById, selectBooks} from "../../store/book/selectors";
import {loadReviewsIfNotExist} from "../../store/review/loadReviewsIfNotExist";
import {selectReviewById, selectReviews} from "../../store/review/selectors";
import {loadBookIfNotExist, loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";

const InfoPage = () => {
    const {bookId} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("Loading..")
        dispatch(loadBookIfNotExist(bookId))
    }, [])

    const [book_selected, setBook_selected] = useState({
        id: "",
        name: "",
        type: "",
        author: "",
        genre: "",
        price: "",
        rating: "",
        annotation: "",
        reviews: []
    })

    const current_book = useSelector((state) => selectBookById(state, bookId))

    useEffect(() => {
        setBook_selected(
            (prev) => {
                // let res = {...current_book}
                let res = Object.assign({}, current_book)
                return (
                    res
                )
            }
        )
    }, [current_book])

    let elements = []

    let arr = Object.assign([], book_selected.reviews)

    elements = arr.map((item) => {
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