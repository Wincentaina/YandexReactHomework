import React from 'react';
import s from "./CartCards.module.css"
import OneBook from "../OneBook/OneBook";

const CartCards = ({books}) => {

    let elems = books.map((item) => {
        return (
            <OneBook id={item} key={item} isCard={true}/>
        )
    })

    return (
        <div className={s.cards}>
            {elems}
        </div>
    );
};

export default CartCards;