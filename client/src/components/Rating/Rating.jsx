import React from 'react';
import s from "./Rating.module.css"

const Rating = ({number}) => {
    const get_stars = (num) => {
        let stars = ""
        if (num > 5) {
            num = 5
        }
        for (let i = 0; i < num; i++){
            stars += "★ "
        }
        let n = 5 - num
        for (let i = 1; i <= n; i++){
            stars += "☆ "
        }
        return stars
    }

    return (
        <div className={s.rating}>
            {get_stars(number)}
        </div>
    );
};

export default Rating;