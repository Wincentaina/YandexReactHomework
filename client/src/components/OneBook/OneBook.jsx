import React, {useEffect, useState} from 'react';
import s from "./OneBook.module.css"
import Counter from "../Counter/Counter";
import Rating from "../Rating/Rating";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadBookIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectBookById} from "../../store/book/selectors";

const OneBook = (props) => {
    const {info, id, isCard} = props

    if (!isCard) {
        let id = info.id
    }

    const [data, setData] = useState({ //
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
        dispatch(loadBookIfNotExist(id))
    }, [])

    const book = useSelector((state) => selectBookById(state, id))

    useEffect(() => {
        let res = Object.assign({}, book)
        setData(
            res
        )
    }, [book])

    if (!isCard) {
        return (
            <div className={s.book}>
                <div className={s.inform_block}>
                    <NavLink className={s.link} to={"/" + info.id}>
                        <h2 className={s.name}>{info.name}</h2>
                    </NavLink>
                    <div className={s.info}>
                        <p className={s.author}>{info.author}</p>
                        <p className={s.genre}>{info.genre}</p>
                        <Rating number={info.rating}/>
                    </div>
                    <p className={s.price}>{info.price} ₽</p>
                </div>
                <Counter bookId={info.id}/>
            </div>
        );
    }


    return (
        <div className={s.book}>
            <div className={s.inform_block}>
                <NavLink className={s.link} to={"/" + data.id}>
                    <h2 className={s.name}>{data.name}</h2>
                </NavLink>
                <div className={s.info}>
                    <p className={s.author}>{data.author}</p>
                    <p className={s.genre}>{data.genre}</p>
                    <Rating number={data.rating}/>
                </div>
                <p className={s.price}>{data.price} ₽</p>
            </div>
            <Counter bookId={data.id}/>
        </div>
    );
};

export default OneBook;
