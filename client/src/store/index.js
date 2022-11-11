import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreSlice} from "./genre";
import {bookSlice} from "./book";

export const store = configureStore({
    reducer: combineReducers({
        genre: genreSlice.reducer,
        book: bookSlice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

