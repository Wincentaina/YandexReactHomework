import React from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";

const BooksContainer = () => {
    return (
        <div className={s.books_container}>
            <OneBook />
        </div>
    );
};

export default BooksContainer;