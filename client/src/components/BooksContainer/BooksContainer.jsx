import {React, useContext, useEffect} from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";
import {InfoContext} from "../../context/InfoContext";
import {useDispatch, useSelector} from "react-redux";
import {selectGenres} from "../../store/genre/selectors";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectBooks} from "../../store/book/selectors";


const BooksContainer = ({genreId}) => {
    const MyContext = useContext(InfoContext)
    const genres = useSelector((state) => selectGenres(state))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId))
    }, [genreId])

    const books = useSelector((state) => selectBooks(state))

    let only_books_ids = []
    if (genres.length > 0) {
         genres.map((item) => {
            if (item.name === MyContext.currentGenre) {
                only_books_ids =  item.books;
                return;
            }
            return;
        })
    }

    let current_books = books.filter((book) => {
        if (only_books_ids.includes(book.id)) {
            return book
        }
    })

    let elements = current_books.map((item) => {
        return <OneBook info={item} key={item.id}/>
    })

    return (<div className={s.books_container}>
        {elements.length > 0 && elements}
    </div>);
};

export default BooksContainer;