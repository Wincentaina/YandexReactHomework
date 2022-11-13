import React from 'react';
import s from "./Total.module.css"
import ShortBook from "../ShortBook/ShortBook";

const Total = () => {

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
        <div className={s.total}>
            <div className={s.content}>
                <h1 className={s.title}>Ваш заказ:</h1>
                <div className={s.book_list}>
                    {/*{books}*/}
                    <ShortBook book={fake_data}/>
                    <ShortBook book={fake_data}/>
                    <ShortBook book={fake_data}/>
                    <ShortBook book={fake_data}/>
                    <ShortBook book={fake_data}/>
                    <ShortBook book={fake_data}/>
                </div>
                <div className={s.bottom}>
                    <div className={s.bottom_content}>
                        <p className={s.itog}>Итого: <span>{"1000"}₽</span></p>
                        <button className={s.buy}>Купить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Total;