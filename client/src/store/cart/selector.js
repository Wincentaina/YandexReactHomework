export const selectCartModule = (state) => state.cart

export const selectBookCount = (state, bookId) => selectCartModule(state)[bookId]

export const selectBooksCounters = (state) => selectCartModule(state)