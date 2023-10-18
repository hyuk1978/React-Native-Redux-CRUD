import { configureStore } from "@reduxjs/toolkit";
import ShoppingReducer from "./slice/ShoppingSlice"; // export default해줘서 임의로 이름을 정할 수 있음

export const store = configureStore({
    reducer : {
        shopping : ShoppingReducer 
    },
})