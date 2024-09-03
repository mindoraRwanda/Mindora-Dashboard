import { configureStore } from "@reduxjs/toolkit";
import CounterReducer  from "./slice";


const store=configureStore({
    reducer:{
     MindoraSlice:CounterReducer,
    },
});
export default store;