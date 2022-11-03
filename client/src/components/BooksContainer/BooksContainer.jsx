import React from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";

const BooksContainer = ({books}) => {
    let elememnts = books.map((item) => {
        return (
            <OneBook info={item} key={item.id}/>
        )
    })
    return (
        <div className={s.books_container}>
            {elememnts}
        </div>
    );
};

export default BooksContainer;