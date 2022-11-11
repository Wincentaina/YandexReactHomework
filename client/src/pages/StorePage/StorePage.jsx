import React, {useEffect, useState} from 'react';
import s from "./StorePage.module.css"
import GenresBar from "../../components/GenresBar/GenresBar";
import BooksContainer from "../../components/BooksContainer/BooksContainer";
import {InfoContext} from "../../context/InfoContext";
import {useDispatch, useSelector} from "react-redux";
import {selectGenre} from "../../store/genre/selectors";
import {loadGenresIfNotExist} from "../../store/genre/loadGenresIfNotExist";

const StorePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGenresIfNotExist)
    }, [])

    const genres = useSelector((state) => selectGenre(state))
    const [currentGenre, setCurrentGenre] = useState(genres[0]) // разобраться с изначальным значением состояния
    return (
        <InfoContext.Provider value={{currentGenre, setCurrentGenre}}>
            <div className={s.store}>
                {genres.length > 0 && <GenresBar />}
                <BooksContainer />
            </div>
        </InfoContext.Provider>
    );
};

export default StorePage;