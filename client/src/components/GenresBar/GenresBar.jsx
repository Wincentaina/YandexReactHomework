import React, {useContext} from 'react';
import s from './GenersBar.module.css'
import {InfoContext} from "../../context/InfoContext";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectGenres} from "../../store/genre/selectors";

const GenresBar = () => {
    const genres = useSelector((state) => selectGenres(state))
    const MyContext = useContext(InfoContext)

    const changeGenre = (e) => {
        MyContext.setCurrentGenre(e.target.textContent)
    }

    const only_genre = genres.map((item) => {
        return item.name
    })

    let elements = only_genre.map((item) => {
        if (item === MyContext.currentGenre) {
            return (
                <h3 className={s.genre_main} key={item} onClick={changeGenre}>
                    <span className={classNames(s.genre_text, s.active_genre_text)}>{item}</span>
                </h3>
            )
        }
        return (
            <h3 className={s.genre_main} key={item} onClick={changeGenre}>
                <span className={s.genre_text}>{item}</span>
            </h3>
        )
    })
    return (
        <div className={s.genres_bar}>
            {elements}
        </div>
    );
};

export default GenresBar;