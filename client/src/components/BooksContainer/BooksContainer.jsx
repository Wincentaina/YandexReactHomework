import {React, useContext} from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";
import {InfoContext} from "../../context/InfoContext";


const BooksContainer = ({books}) => {
    const MyContext = useContext(InfoContext)

    let elements = books.map((item) => {
        if (item["type"] === MyContext.currentGenre){
            return (
                <OneBook info={item} key={item.id}/>
            )
        }
        return null
    })
    return (
        <div className={s.books_container}>
            {elements}
        </div>
    );
};

export default BooksContainer;