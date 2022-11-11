import {genreSlice, bookSlice} from "./index";
import {prepareData} from "../utils";

export const loadBooksIfNotExist = (genreId) = (dispatch, getState) => {
    // if (selectGenre(getState())?.length > 0) {
    //     return
    // }
    dispatch(bookSlice.actions.startLoading())
    fetch(`http://localhost:3001/api/books?id=${genreId}`)
        .then((response) => response.json())
        .then(books => {
            dispatch(genreSlice.actions.successLoading(prepareData(books)))
        }).catch(() => {
        dispatch(genreSlice.actions.failLoading())
    })
}