import React, {useEffect, useState} from 'react';
import s from "./StorePage.module.css"
import GenresBar from "../../components/GenresBar/GenresBar";
import BooksContainer from "../../components/BooksContainer/BooksContainer";
import {InfoContext} from "../../context/InfoContext";
import {useDispatch, useSelector} from "react-redux";
import {selectGenres} from "../../store/genre/selectors";
import {loadGenresIfNotExist} from "../../store/genre/loadGenresIfNotExist";

const StorePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGenresIfNotExist)
    }, [])

    const genres = useSelector((state) => selectGenres(state))
    const [currentGenre, setCurrentGenre] = useState({
        name: "Художественная литература",
        id: "5f824b12-fb0b-4619-b510-6db9de0130eb"
    })
    return (
        <InfoContext.Provider value={{currentGenre, setCurrentGenre}}>
            <div className={s.store}>
                {genres.length > 0 && <GenresBar />}
                <BooksContainer info={currentGenre}/>
            </div>
        </InfoContext.Provider>
    );
};

export default StorePage;