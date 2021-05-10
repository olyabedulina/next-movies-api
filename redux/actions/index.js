import {
    loadMovies as loadMoviesService,
    addMovie as addMovieService,
    editMovie as editMovieService,
    getMovie as getMovieService,
    deleteMovie as deleteMovieService
} from '../../services'

export function loadMovies({ search, __loadMoviesService = loadMoviesService }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__LOAD__INIT'
        })

        return __loadMoviesService({
            sortBy: 'release_date',
            sortOrder: 'desc',
            filters: '',
            search: search,
            searchBy: 'title'
        }).then((moviesData) => {
            dispatch({
                type: 'MOVIES__LOAD__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        search: search
                    }
            })
        })
    }
}

export function initApp(search) {
    return (dispatch) => {
        dispatch({
            type: 'APP__INIT'
        })
        dispatch(loadMovies({ search }))
    }
}

export function addMovie({ movieInfo, __addMovieService = addMovieService }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__ADD__INIT'
        })

        return __addMovieService(movieInfo).then((moviesData) => {
            dispatch({
                type: 'MOVIE__ADD__DONE',
                payload: moviesData
            })
        })
    }
}

export function editMovie({ movieInfo, __editMovieService = editMovieService }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__EDIT__INIT'
        })

        return __editMovieService(movieInfo).then((moviesData) => {
            dispatch({
                type: 'MOVIE__EDIT__DONE',
                payload: moviesData
            })
        })
    }
}

export function deleteMovie({ movieId, __deleteMovieService = deleteMovieService }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__DELETE__INIT'
        })

        return __deleteMovieService(movieId).then(() => {
            dispatch({
                type: 'MOVIE__DELETE__DONE',
                payload: movieId
            })
        })
    }
}

export function getMovie({ movieId, __getMovieService = getMovieService }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__GET__INIT'
        })

        return __getMovieService(movieId).then((movieData) => {
            dispatch({
                type: 'MOVIE__GET__DONE',
                payload: movieData
            })
        })
    }
}

export function sortMoviesBy(sortBy, sortOrder) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: sortOrder}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        sortBy: sortBy,
                        sortOrder: sortOrder
                    }
            })
        })
    }
}

export function filterMoviesBy(filters, movieFilterID) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__FILTER__INIT'
        })

        loadMoviesService({filters: filters}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__FILTER__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        movieFilterID: movieFilterID,
                        filters: filters
                    }
            })
        })
    }
}

export function sortAndFilterMoviesBy(sortBy, sortOrder, filters, movieFilterID, searchQuery) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__AND__FILTER__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: sortOrder, filters: filters, search: searchQuery, searchBy: 'title'}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__AND__FILTER__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        sortBy: sortBy,
                        sortOrder: sortOrder,
                        movieFilterID: movieFilterID,
                        filters: filters
                    }
            })
        })
    }
}

export function resetApp() {
    return {
        type: 'RESET__APP'
    }
}
