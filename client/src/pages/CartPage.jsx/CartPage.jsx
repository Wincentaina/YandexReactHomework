import React, {useEffect} from 'react';
import s from "./CartPage.module.css"
import Total from "../../components/Total/Total";
import CartCards from "../../components/CartCards/CartCards";
import {useDispatch, useSelector} from "react-redux";
import {selectBookCount, selectBooksCounters} from "../../store/cart/selector";
import {cartSlice} from "../../store/cart";

const CartPage = () => {
    const bookId = "e5a676f1-360e-4863-b02d-770881176f57"
    const dispatch = useDispatch()
    // здесь валаяются все все стейти. Взять id и отрендерить заказ и карты
    console.log(useSelector((state) => selectBooksCounters(state)))

    return (
        <div className={s.container}>
            <Total />
            <CartCards />
        </div>
    );
};

export default CartPage;