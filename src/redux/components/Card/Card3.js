import React from 'react'
import styles from "../Card/card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../features/counter/basketSLice';
import ethereum from "../../../icons/ethereum.png"

export default function Card3() {

    const itemCount = useSelector((state) => state.basket.card3Value)
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles["card-bg"]}>
                <div className={styles["product-image"]}>
                    <img src={ethereum} alt="ethereum" />
                </div>
                <div className={styles["btn-container"]}>
                    <button onClick={() => dispatch(addBasket("card3"))} className={styles["add-basket-btn"]}>Add Basket</button>
                    <div className={styles["card-count"]}>
                        <span>{itemCount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
