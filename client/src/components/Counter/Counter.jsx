import React, {useState} from 'react';
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectBookCount} from "../../store/cart/selector";
import {cartSlice} from "../../store/cart";


const Counter = ({bookId}) => {
    const dispatch = useDispatch()
    const count = useSelector((state) => selectBookCount(state, bookId))


    const min_count = () => {
        dispatch(cartSlice.actions.removeBook(bookId))
    }

    const plus_count = () => {
        dispatch(cartSlice.actions.addBook(bookId))
    }
    return (
        <div className={s.book_buttons}>
            <div className={s.buttons}>
                <button className={s.min_button} onClick={min_count}>—</button>
                <p className={s.counter}>{count || 0}</p>
                <button className={s.plus_button} onClick={plus_count}>+</button>
            </div>
        </div>
    );
};

export default Counter;