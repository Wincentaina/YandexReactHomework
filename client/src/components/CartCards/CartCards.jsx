import React from 'react';
import s from "./CartCards.module.css"
import OneBook from "../OneBook/OneBook";

const CartCards = () => {

    const fake_data = {
        id: "e5a676f1-360e-4863-b02d-770881176f57",
        name: "Несносное проклятье некроманта",
        type: "Художественная литература",
        author: "Блинова Маргарита",
        genre: "Фэнтези",
        price: "250",
        rating: "4",
        annotation: "Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить \"что-нибудь для вечной любви\"? Подумай о некромантии! Присоединяйся к дружной компании черных магов и просто любителей гулять по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками черного. Вперед, Тесса Грей!",
        reviews: [
            '16cd3a6e-2b2a-440d-a052-aeb3a8148819',
            'a7aa6ce9-7a33-4212-b175-48d5ff432eec'
        ]
    }

    return (
        <div className={s.cards}>
            <OneBook info={fake_data}/>
            <OneBook info={fake_data}/>
            <OneBook info={fake_data}/>
            <OneBook info={fake_data}/>
            <OneBook info={fake_data}/>
        </div>
    );
};

export default CartCards;