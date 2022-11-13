import React from 'react';
import s from "./ShortBook.module.css"

const ShortBook = ({book}) => {
    return (
        <div className={s.short_container}>
            <h3 className={s.book_name}>{book.name}</h3>
            <p className={s.price}>{book.price}₽</p>
        </div>
    );
};

export default ShortBook;