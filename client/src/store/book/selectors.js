export const selectBookModule = (state) => state.book

export const selectBooks = (state) => Object.values(selectBookModule(state).entities)
