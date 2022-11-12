import React from 'react';
import s from "./OneBook.module.css"
import Counter from "../Counter/Counter";
import Rating from "../Rating/Rating";
import {NavLink} from "react-router-dom";

const OneBook = ({info}) => {
    return (
        <div className={s.book}>
            <div className={s.inform_block}>
                <NavLink className={s.link} to={info.id}>
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
};

export default OneBook;