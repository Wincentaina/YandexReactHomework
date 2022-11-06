import React from 'react';
import s from "./InfoPage.module.css"
import OneBook from "../../components/OneBook/OneBook";
import Review from "../../components/Review/Review";

const InfoPage = ({book}) => {
    const reviews = book.info.reviews

    let elements = reviews.map((item) => {
        return (<Review reviews={item} key={item.id}/>)
    })

    return (
        <div className={s.info}>
            <div className={s.top}>
                <OneBook info={book}/>
                <div className={s.annotation}>
                    <p className={s.an_title}>Аннотация</p>
                    <p>{book.info.annotation}</p>
                </div>
            </div>
            <div className={s.reviews}>
                {elements}
            </div>
        </div>
    );
};

export default InfoPage;