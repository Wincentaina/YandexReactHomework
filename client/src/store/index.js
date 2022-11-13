import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreSlice} from "./genre";
import {bookSlice, oneBookSlice} from "./book";
import {cartSlice} from "./cart";
import {reviewSlice} from "./review";

export const store = configureStore({
    reducer: combineReducers({
        genre: genreSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
        review: reviewSlice.reducer,
        oneBook: oneBookSlice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

