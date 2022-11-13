export const selectBookModule = (state) => state.book
export const selectOneBookModule = (state) => state.oneBook

export const selectBooks = (state) => Object.values(selectBookModule(state).entities)

// export const selectBookById = (state, bookId) =>
// {
//     console.log("selectors:", selectBookModule(state).entities)
//     return selectBookModule(state).entities[bookId]
// }

export const selectBookById = (state, bookId) => selectOneBookModule(state).entities[bookId]


