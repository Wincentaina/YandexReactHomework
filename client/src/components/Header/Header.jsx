import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.items}>
                <h1><span>Магазин</span></h1>
            </div>
        </header>
    );
};

export default Header;