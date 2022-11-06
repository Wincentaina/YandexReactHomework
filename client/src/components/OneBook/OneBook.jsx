import React from 'react';
import s from "./OneBook.module.css"
import {useState} from "react";

const OneBook = ({info}) => {
    const [count, setCount] = useState(0)
    const get_stars = (num) => {
        let stars = ""
        if (num > 5) {
            num = 5
        }
        for (let i = 0; i < num; i++){
            stars += "★ "
        }
        let n = 5 - num
        for (let i = 1; i <= n; i++){
            stars += "☆ "
        }
        return stars
    }

    const min_count = () => {
        setCount(
            (prev) => {
                if (prev > 0){
                    return (prev - 1)
                }
                return 0
            }
        )
    }

    const plus_count = () => {
        setCount(
            (prev) => {
                if (prev < 4){
                    return (prev + 1)
                }
                return  prev
            }
        )
    }

    return (
        <div className={s.book}>
            <div className={s.inform_block}>
                <h2 className={s.name}>{info.name}</h2>
                <div className={s.info}>
                    <p className={s.author}>{info.author}</p>
                    <p className={s.genre}>{info.genre}</p>
                    <div className={s.rating}>{get_stars(info.rating)}</div>
                </div>
                <p className={s.price}>{info.price} ₽</p>
            </div>
            <div className={s.book_buttons}>
                <div className={s.buttons}>
                    <button className={s.min_button} onClick={min_count}>—</button>
                    <p className={s.counter}>{count}</p>
                    <button className={s.plus_button} onClick={plus_count}>+</button>
                </div>
            </div>
        </div>
    );
};

export default OneBook;