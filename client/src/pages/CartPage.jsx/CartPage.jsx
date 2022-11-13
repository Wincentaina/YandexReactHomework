import React, {useEffect} from 'react';
import s from "./CartPage.module.css"
import Total from "../../components/Total/Total";
import CartCards from "../../components/CartCards/CartCards";
import {useSelector} from "react-redux";
import {selectBooksCounters} from "../../store/cart/selector";

const CartPage = () => {

    const counters = useSelector((state) => selectBooksCounters(state))
    const books = Object.keys(counters)

    return (
        <div className={s.container}>
            <Total books={books} counters={counters}/>
            <CartCards books={books}/>
        </div>
    );
};

export default CartPage;