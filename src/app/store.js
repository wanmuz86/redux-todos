import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'

// Create a store that will be called later from the UI (Context)

export const store = configureStore({
    // List down the reducers within this store , you might have multiple reducers
    reducer:todoReducer

    // You can also define other component eg, middleware in this store
})