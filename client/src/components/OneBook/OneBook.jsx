import React from 'react';
import s from "./OneBook.module.css"

const OneBook = ({info}) => {
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
    return (
        <div className={s.book}>
            <h2 className={s.name}>{info.name}</h2>
            <div className={s.info}>
                <p className={s.author}>{info.author}</p>
                <p className={s.genre}>{info.genre}</p>
                <div className={s.rating}>{get_stars(info.rating)}</div>
            </div>
            <p className={s.price}>{info.price} ₽</p>
        </div>
    );
};

export default OneBook;