import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";
import cart from "../../imgs/cart.png"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.items}>
                <h1>
                    <Link to="/" className={s.link}>
                        <span>Магазин</span>
                    </Link>
                </h1>
                <Link to="/cart" className={s.cart_link}>
                    <div className={s.cart_container}>
                        <img src={cart} alt="cart"/>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;