export function getSearchResultItems(state) {
    return state.movieList
}

export function getFilterItems(state) {
    return state.filterItemsList
}

export function getCurrentMovie(state) {
    return state.currentMovie
}

export function getSortBy(state) {
    return state.sortBy
}

export function getSortOrder(state) {
    return state.sortOrder
}

export function getFilters(state) {
    return state.filters
}

export function getSelectedItem(state) {
    return state.movieFilterID
}

export function getSearchQuery(state) {
    return state.search
}
