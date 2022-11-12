import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.items}>
                <Link to="/" className={s.link}>
                    <h1><span>Магазин</span></h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;