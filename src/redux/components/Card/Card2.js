import React from 'react'
import styles from "../Card/card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../features/counter/basketSLice';
import dogecoin from "../../../icons/dogecoin.png"

export default function Card2() {

    const itemCount = useSelector((state) => state.basket.card2Value)
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles["card-bg"]}>
                <div className={styles["product-image"]}>
                    <img src={dogecoin} alt="dogecoin" />
                </div>
                <div className={styles["btn-container"]}>
                    <button onClick={() => dispatch(addBasket("card2"))} className={styles["add-basket-btn"]}>Add Basket</button>
                    <div className={styles["card-count"]}>
                        <span>{itemCount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
