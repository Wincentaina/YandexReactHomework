import React, {useState} from 'react';
import s from "./Counter.module.css"


const Counter = () => {
    const [count, setCount] = useState(0)
    const min_count = () => {
        setCount(
            (prev) => {
                if (prev > 0){
                    return (prev - 1)
                }
                return 0
            }
        )
    }

    const plus_count = () => {
        setCount(
            (prev) => {
                if (prev < 4){
                    return (prev + 1)
                }
                return  prev
            }
        )
    }
    return (
        <div className={s.book_buttons}>
            <div className={s.buttons}>
                <button className={s.min_button} onClick={min_count}>—</button>
                <p className={s.counter}>{count}</p>
                <button className={s.plus_button} onClick={plus_count}>+</button>
            </div>
        </div>
    );
};

export default Counter;