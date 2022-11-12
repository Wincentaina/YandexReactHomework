export const selectGenreModule = (state) => state.genre

export const selectGenres = (state) => Object.values(selectGenreModule(state).entities)
