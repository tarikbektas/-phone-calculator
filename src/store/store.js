import { configureStore } from "@reduxjs/toolkit";
 import {calcReducers} from './slice/Calc'

export const store = configureStore({
    reducer:{
         calc:calcReducers

    }

})

