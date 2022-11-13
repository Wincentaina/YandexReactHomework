import {allBooksSlice, bookSlice, oneBookSlice} from "./index";
import {prepareData} from "../utils";

export const loadBooksIfNotExist = (genreId) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading())
    fetch(`http://localhost:3001/api/books/${genreId}`)
        .then((response) => response.json())
        .then(books => {
            dispatch(bookSlice.actions.successLoading(prepareData(books)))
        }).catch(() => {
        dispatch(bookSlice.actions.failLoading())
    })
}

export const loadBookIfNotExist = (bookId) => (dispatch, getState) => {
    dispatch(oneBookSlice.actions.startLoading())
    fetch(`http://localhost:3001/api/book/${bookId}`)
        .then((response) => response.json())
        .then(item => {
            let book = []
            book.push(item)
            dispatch(oneBookSlice.actions.successLoading(prepareData(book)))
        }).catch((e) => {
        dispatch(oneBookSlice.actions.failLoading())
    })
}

export const loadAllBooksIfNotExist = (dispatch, getState) => {
    dispatch(allBooksSlice.actions.startLoading())
    fetch(`http://localhost:3001/api/books`)
        .then((response) => response.json())
        .then(item => {
            dispatch(allBooksSlice.actions.successLoading(prepareData(item)))
        }).catch((e) => {
        console.log(e)
        dispatch(allBooksSlice.actions.failLoading())
    })
}
