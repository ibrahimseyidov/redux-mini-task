import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  card1Value: 0,
  card2Value: 0,
  card3Value: 0
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state,action) => {
      state.value += 1
      console.log(action.payload);
      if(action.payload === "card1"){
        state.card1Value += 1
      } else if (action.payload === "card2") {
        state.card2Value += 1
      } else if (action.payload === "card3") {
        state.card3Value += 1
      }
    },
  }
})

export const { addBasket } = basketSlice.actions

export default basketSlice.reducer