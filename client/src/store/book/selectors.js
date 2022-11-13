export const selectBookModule = (state) => state.book
export const selectOneBookModule = (state) => state.oneBook
export const selectAllBooksModule = (state) => state.allBooks

export const selectBooks = (state) => Object.values(selectBookModule(state).entities)

export const selectBookById = (state, bookId) => selectOneBookModule(state).entities[bookId]

export const selectAllBooks = (state) => selectAllBooksModule(state).entities

