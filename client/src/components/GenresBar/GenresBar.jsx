import React, {useContext} from 'react';
import s from './GenersBar.module.css'
import {InfoContext} from "../../context/InfoContext";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectGenres} from "../../store/genre/selectors";

const GenresBar = () => {
    const genres = useSelector((state) => selectGenres(state))
    const MyContext = useContext(InfoContext)

    const only_genre = genres.map((item) => {
        const tmp = {}
        tmp.name = item.name
        tmp.id = item.id
        return tmp
    })

    const changeGenre = (e) => {
        let id = ""
        let text = e.target.textContent
        only_genre.filter((item) => {
            if (item.name === text) {
                id = item.id
                return
            }
            return;
        })
        MyContext.setCurrentGenre((prev) => {
            return (
                {
                    name: text,
                    id: id
                }
            )
        })
    }

    let elements = only_genre.map((item) => {
        if (item.name === MyContext.currentGenre.name) {
            return (
                <h3 className={s.genre_main} key={item.id} onClick={changeGenre} id={item.id}>
                    <span className={classNames(s.genre_text, s.active_genre_text)}>{item.name}</span>
                </h3>
            )
        }
        return (
            <h3 className={s.genre_main} key={item.id} onClick={changeGenre} id={item.id}>
                <span className={s.genre_text}>{item.name}</span>
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