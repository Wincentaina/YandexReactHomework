export const selectCartModule = (state) => state.cart

export const selectBookCount = (state, bookId) => selectCartModule(state)[bookId]

export const selectBooksCounters = (state) => selectCartModule(state)

// export const selectCartBooks = (state) => {
//     let keys = Object.keys(selectCartModule(state))
//
//     keys.map(item => {
//         console.log()
//     })
//     return
// }