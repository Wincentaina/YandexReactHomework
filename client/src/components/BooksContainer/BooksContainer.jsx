import {React, useContext} from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";
import {InfoContext} from "../../context/InfoContext";
import {useSelector} from "react-redux";
import {selectGenre} from "../../store/genre/selectors";


const BooksContainer = () => {
    const MyContext = useContext(InfoContext)
    const genres = useSelector((state) => selectGenre(state))

    let elements = []
    console.log(genres)
    if (genres.length > 0) { // поправить ужас
        elements = genres.map((item) => {
            if (item["type"] === MyContext.currentGenre) {
                return (
                    <OneBook info={item} key={item.id}/>
                )
            }
            return null
        })
    }

    return (
        <div className={s.books_container}>
            {elements.length > 0 && elements}
        </div>
    );
};

export default BooksContainer;