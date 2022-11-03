import React from 'react';
import s from "./StorePage.module.css"
import GenresBar from "../../components/GenresBar/GenresBar";
import BooksContainer from "../../components/BooksContainer/BooksContainer";

const StorePage = (props) => {
    const books = props["books"]
    return (
        <div className={s.store}>
            <GenresBar books={books}/>
            <BooksContainer books={books}/>
        </div>
    );
};

export default StorePage;