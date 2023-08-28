import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../features/counter/basketSLice"


export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})