import React, {useState} from 'react';
import s from "./StorePage.module.css"
import GenresBar from "../../components/GenresBar/GenresBar";
import BooksContainer from "../../components/BooksContainer/BooksContainer";
import {InfoContext} from "../../context/InfoContext";

const StorePage = (props) => {
    const books = props["books"]
    const [currentGenre, setCurrentGenre] = useState(books[0]["type"])
    return (
        <InfoContext.Provider value={{currentGenre, setCurrentGenre}}>
            <div className={s.store}>
                <GenresBar books={books}/>
                <BooksContainer books={books}/>
            </div>
        </InfoContext.Provider>
    );
};

export default StorePage;