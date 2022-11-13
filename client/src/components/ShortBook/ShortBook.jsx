import React, {useEffect, useState} from 'react';
import s from "./ShortBook.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loadBookIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectBookById} from "../../store/book/selectors";

const ShortBook = ({bookId}) => {

    const [data, setData] = useState({
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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBookIfNotExist(bookId))
    }, [])

    const book = useSelector((state) => selectBookById(state, bookId))

    useEffect(() => {
        let res = Object.assign({}, book)
        setData(
            res
        )
    } , [book])

    return (
        <div className={s.short_container}>
            <h3 className={s.book_name}>{data.name}</h3>
            <p className={s.price}>{data.price}₽</p>
        </div>
    );
};

export default ShortBook;