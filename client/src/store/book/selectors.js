export const selectBookModule = (state) => state.book

export const selectBook = (state) => Object.values(selectBookModule(state).entities)
