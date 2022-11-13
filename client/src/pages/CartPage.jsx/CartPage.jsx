import React from 'react';
import s from "./CartPage.module.css"
import Total from "../../components/Total/Total";
import CartCards from "../../components/CartCards/CartCards";

const CartPage = () => {
    return (
        <div className={s.container}>
            <Total />
            <CartCards />
        </div>
    );
};

export default CartPage;