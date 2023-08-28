import React from 'react'
import styles from "../Card/card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../features/counter/basketSLice';
import bitcoin from "../../../icons/bitcoin.png"

export default function Card1() {

    const itemCount = useSelector((state) => state.basket.card1Value)
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles["card-bg"]}>
                <div className={styles["product-image"]}>
                    <img src={bitcoin} alt="bitcoin" />
                </div>
                <div className={styles["btn-container"]}>
                    <button onClick={() => dispatch(addBasket("card1"))} className={styles["add-basket-btn"]}>Add Basket</button>
                    <div className={styles["card-count"]}>
                        <span>{itemCount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
