import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = [
  { id: 1, name: "Диагностика", price: "Бесплатно"},
  { id: 2, name: "Замена стекла", price: 21000},
  { id: 3, name: "Замена дисплея", price: 25000},
];

const counterSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    add(state, action) {
      if (action.payload.name !== "" && action.payload.price !== "") {
        state.push({ id: shortid.generate(), ...action.payload })
      }
      
    },
    remove(state, action) {
      const id = action.payload;
      return state.filter((el) => el.id !== id);
    },
    update(state, action) {
      const { id, name, price } = action.payload
      state.forEach((el) => {
        if (el.id === id) {
          el.name = name
          el.price = price
        }
      })
    },
  }
})

export const { add, remove, update } = counterSlice.actions
export default counterSlice.reducer