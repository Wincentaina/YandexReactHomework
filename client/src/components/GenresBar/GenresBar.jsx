import React from 'react';
import s from './GenersBar.module.css'

const GenresBar = ({books}) => {
    const genres = []
    books.map((item) => {
        if (genres.indexOf(item.type) === -1){
            genres.push(item.type)
        }
        return 1
    })
    let elements = genres.map((item) => {
        return (
            <h3 className={s.genre_main} key={item}>
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