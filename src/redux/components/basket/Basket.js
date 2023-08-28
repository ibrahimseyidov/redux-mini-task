import React from 'react'
import { useSelector } from 'react-redux'
import basket from "../../../icons/basket.png"
import styles from "../basket/basket.module.css"

export default function Basket() {

    const basketCount = useSelector((state) => state.basket.value)

    return (
        <>
            <button className={styles.basketBtn}>
                <img src={basket} alt="basket" />
                <span className={styles["basket-count"]}>{basketCount}</span>
            </button>
        </>
    )
}
