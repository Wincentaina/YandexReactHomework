import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreSlice} from "./genre";
import {bookSlice} from "./book";
import {cartSlice} from "./cart";

export const store = configureStore({
    reducer: combineReducers({
        genre: genreSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

