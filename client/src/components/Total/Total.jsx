import React, {useEffect, useState} from 'react';
import s from "./Total.module.css"
import ShortBook from "../ShortBook/ShortBook";

const Total = ({books}) => {

    let book_list = books.map((item) => {
        return (
            <ShortBook bookId={item}/>
        )
    })

    return (
        <div className={s.total}>
            <div className={s.content}>
                <h1 className={s.title}>Ваш заказ:</h1>
                <div className={s.book_list}>
                    {book_list}
                </div>
                <div className={s.bottom}>
                    <div className={s.bottom_content}>
                        <p className={s.itog}>Итого: <span>{"1000"}₽</span></p>
                        <button className={s.buy}>Купить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Total;