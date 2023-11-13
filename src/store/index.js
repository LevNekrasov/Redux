import { configureStore } from "@reduxjs/toolkit";
import serviceList from './serviceList'
import serviceAdd from './serviceAdd'
import serviceFilter from './serviceFilter'


const store = configureStore({
  reducer: {
    serviceList,
    serviceAdd,
    serviceFilter
  }
})

export default store