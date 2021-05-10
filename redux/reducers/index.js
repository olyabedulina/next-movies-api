import { filterItemsData } from '../../components/data/filterItemsData'

const x = {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
        "Drama",
        "Romance"
    ],
    "runtime": 106
}

const initialState = {
    movieList: [],
    filterItemsList: filterItemsData,
    currentMovie: null,
    sortBy: 'release_date',
    sortOrder: 'desc',
    movieFilterID: null,
    filters: '',
    search: '',
    searchBy: 'title'
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVIES__LOAD__DONE':
            return {
                ...state,
                movieList: action.payload.moviesData,
                search: action.payload.search,
                movieFilterID: (state.movieFilterID === null) ? '' : state.movieFilterID
            }
        case 'MOVIE__ADD__DONE':
            return {
                ...state,
                 movieList: state.movieList.concat(action.payload)
            }
        case 'MOVIE__GET__DONE':
            return {
                ...state,
                currentMovie: action.payload
            }
        case 'MOVIE__DELETE__DONE':
            return {
                ...state,
                movieList: state.movieList.filter((item) => (item.id !== action.payload))
            }
        case 'MOVIE__EDIT__DONE':
            return {
                ...state,
                movieList: state.movieList.map(function(item) {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item;
                })
            }
        case 'MOVIES__SORT__DONE':
            return {
                ...state,
                movieList: action.payload.moviesData,
                sortBy: action.payload.sortBy,
                sortOrder: action.payload.sortOrder
            }
        case 'MOVIES__FILTER__DONE':
            return {
                ...state,
                movieList: action.payload.moviesData,
                movieFilterID: action.payload.movieFilterID,
                filters: action.payload.filters
            }
        case 'MOVIES__SORT__AND__FILTER__DONE':
            return {
                ...state,
                movieList: action.payload.moviesData,
                sortBy: action.payload.sortBy,
                sortOrder: action.payload.sortOrder,
                movieFilterID: action.payload.movieFilterID,
                filters: action.payload.filters
            }
        case 'RESET__APP':
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default rootReducer
