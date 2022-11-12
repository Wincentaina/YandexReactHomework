import {prepareData} from "../utils";
import {reviewSlice} from "./index";

export const loadReviewsIfNotExist = (reviewId) => (dispatch, getState) => {

    dispatch(reviewSlice.actions.startLoading())
    fetch(`http://localhost:3001/api/reviews/${reviewId}`)
        .then((response) => response.json())
        .then(reviews => {
            let lst = []
            lst.push(reviews)
            dispatch(reviewSlice.actions.successLoading(prepareData(lst)))
        }).catch((e) => {
        dispatch(reviewSlice.actions.failLoading())
    })
}
