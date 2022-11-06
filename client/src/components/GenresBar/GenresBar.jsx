import React, {useContext} from 'react';
import s from './GenersBar.module.css'
import {InfoContext} from "../../context/InfoContext";
import classNames from "classnames";

const GenresBar = ({books}) => {
    const MyContext = useContext(InfoContext)

    const genres = []
    books.map((item) => {
        if (genres.indexOf(item.type) === -1){
            genres.push(item.type)
        }
        return 1
    })

    const changeGenre = (e) => {
        MyContext.setCurrentGenre(e.target.textContent)
    }

    let elements = genres.map((item) => {
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