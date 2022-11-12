import {React, useContext, useEffect} from 'react';
import s from "./BooksContainer.module.css"
import OneBook from "../OneBook/OneBook";
import {InfoContext} from "../../context/InfoContext";
import {useDispatch, useSelector} from "react-redux";
import {selectGenres} from "../../store/genre/selectors";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectBooks} from "../../store/book/selectors";


const BooksContainer = ({info}) => {
    let {name, id} = info
    let genreId = id

    const MyContext = useContext(InfoContext)
    const genres = useSelector((state) => selectGenres(state))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId))
    }, [genreId])

    const books = useSelector((state) => selectBooks(state))

    let elements = books.map((item) => {
        return <OneBook info={item} key={item.id} />
    })

    return (<div className={s.books_container}>
        {elements.length > 0 && elements}
    </div>);
};

export default BooksContainer;