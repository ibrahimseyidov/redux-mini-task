import React from 'react'
import Basket from './redux/components/basket/Basket'
import Card1 from './redux/components/Card/Card1'
import Card2 from './redux/components/Card/Card2'
import Card3 from './redux/components/Card/Card3'
import styles from "./styles/app.module.css"

function App() {



  return (
    <>
      <div className={styles.cantainer}>

        <div className={styles["card-container"]}>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        <div>
          <Basket />
        </div>

      </div>


    </>

  )
}

export default App