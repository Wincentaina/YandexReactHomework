import React, {useEffect, useState} from 'react';
import s from "./Total.module.css"
import ShortBook from "../ShortBook/ShortBook";
import {useDispatch, useSelector} from "react-redux";
import {selectAllBooksModule, selectBookModule} from "../../store/book/selectors";
import {selectBooksCounters, selectCartBooks} from "../../store/cart/selector";
import {loadAllBooksIfNotExist, loadBookIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {allBooksSlice} from "../../store/book";
import {prepareData} from "../../store/utils";

const Total = ({books}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadAllBooksIfNotExist)
    }, [])

    const counters = useSelector((state) => selectBooksCounters(state))
    const books_selected = useSelector(state => selectAllBooksModule(state))
    // const books_selected = useSelector((state) => selectBookModule(state));

    const [cost, setCost] = useState(0)

    let cnt = 0

    useEffect(() => {
        setTimeout(() => {
            if (books_selected.entities) {
                Object.keys(counters).map(item => {
                    cnt += books_selected.entities[item].price * counters[item]
                })
            }
            setCost(cnt)
        }, 800)

    }, [books_selected])

    let book_list = books.map((item) => {
        return (
            <ShortBook bookId={item} key={item}/>
        )
    })

    return (
        <div className={s.total}>
            <div className={s.content}>
                <h1 className={s.title}>Ваш заказ:</h1>
                <div className={s.book_list}>
                    {book_list}
                </div>
                <div className={s.bottom}>
                    <div className={s.bottom_content}>
                        <p className={s.itog}>Итого: <span>{cost}₽</span></p>
                        <button className={s.buy}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;