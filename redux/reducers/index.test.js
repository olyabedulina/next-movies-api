import rootReducer from './index'
import { filterItemsData } from "../../components/data/filterItemsData";

describe('Redux :: Reducer tests:', () => {
    it('Test :: action type = empty', () => {
        const initialState = {
            movieList: [
                {
                    movieA: 'movieA'
                },
                {
                    movieB: 'movieB'
                }
            ]
        }

        expect(rootReducer(initialState, {})).toEqual(initialState)
    })

    it('Test :: action type = MOVIES__LOAD__DONE', () => {
        const initialState = {
            movieList: []
        }

        const action = {
            type: 'MOVIES__LOAD__DONE',
            payload: {
                moviesData: [
                        {
                            movieA: 'movieA'
                        },
                        {
                            movieB: 'movieB'
                        }
                    ],
                search: 'search text'
            }
        }

        expect(rootReducer(initialState, action)).toEqual({
            movieList: action.payload.moviesData,
            search: action.payload.search
        })
    })

    it('Test :: action type = MOVIE__ADD__DONE', () => {
        const newMovieInfo = {
            movieB: 'movieB'
        }

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA'
                }
            ]
        }

        const expectedState = {
            ...initialState,
            movieList: initialState.movieList.concat(newMovieInfo)
        }

        const action = {
            type: 'MOVIE__ADD__DONE',
            payload: newMovieInfo
        }

        expect(rootReducer(initialState, action)).toEqual(expectedState)
    })

    it('Test :: action type = MOVIE__GET__DONE', () => {
        const newMovieInfo = {
            movieC: 'movieC'
        }

        const initialState = {
            currentMovie: null,
        }

        const action = {
            type: 'MOVIE__GET__DONE',
            payload: newMovieInfo
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            currentMovie: newMovieInfo
        })
    })

    it('Test :: action type = MOVIE__DELETE__DONE', () => {
        const deleteMovieId = 'idC'

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA',
                    id: 'idA'
                },
                {
                    movieB: 'movieB',
                    id: 'idB'
                },
                {
                    movieC: 'movieC',
                    id: 'idC'
                }
            ]
        }

        const action = {
            type: 'MOVIE__DELETE__DONE',
            payload: deleteMovieId
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            movieList: initialState.movieList.filter((item) => (item.id !== deleteMovieId))
        })
    })

    it('Test :: action type = MOVIE__EDIT__DONE', () => {
        const editedMovieInfo = {
            movieB: 'movieB new',
            id: 'idB'
        }

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA',
                    id: 'idA'
                },
                {
                    movieB: 'movieB',
                    id: 'idB'
                },
                {
                    movieC: 'movieC',
                    id: 'idC'
                }
            ]
        }

        const action = {
            type: 'MOVIE__EDIT__DONE',
            payload: editedMovieInfo
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            movieList: initialState.movieList.map(function(item) {
                if (item.id === editedMovieInfo.id) {
                    return editedMovieInfo
                }
                return item;
            })
        })
    })

    it('Test :: action type = RESET__APP', () => {
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

        const action = {
            type: 'RESET__APP'
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState
        })
    })

    it('Test :: action type = MOVIES__SORT__DONE', () => {
        const newMovieList = [
            {
                movieB: 'movieB'
            },
            {
                movieA: 'movieA'
            },
        ]

        const newSortOrder = 'asc'
        const newSortBy = 'release_date'

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA'
                },
                {
                    movieB: 'movieB'
                },
            ],
            sortBy: 'title',
            sortOrder: 'desc',
        }

        const expectedState = {
            ...initialState,
            movieList: newMovieList,
            sortBy: newSortBy,
            sortOrder: newSortOrder
        }

        const action = {
            type: 'MOVIES__SORT__DONE',
            payload:
                {
                    moviesData: newMovieList,
                    sortBy: newSortBy,
                    sortOrder: newSortOrder
                }
        }

        expect(rootReducer(initialState, action)).toEqual(expectedState)
    })

    it('Test :: action type = MOVIES__FILTER__DONE', () => {
        const newMovieList = [
            {
                movieB: 'movieC'
            },
            {
                movieA: 'movieD'
            },
        ]

        const newMovieFilterID= 'idA'

        const newFilter = 'Adventure'

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA'
                },
                {
                    movieB: 'movieB'
                },
            ],
            movieFilterID: null,
            filters: '',
        }

        const expectedState = {
            ...initialState,
            movieList: newMovieList,
            movieFilterID: newMovieFilterID,
            filters: newFilter
        }

        const action = {
            type: 'MOVIES__FILTER__DONE',
            payload:
                {
                    moviesData: newMovieList,
                    movieFilterID: newMovieFilterID,
                    filters: newFilter

                }
        }

        expect(rootReducer(initialState, action)).toEqual(expectedState)
    })

    it('Test :: action type = MOVIES__SORT__AND__FILTER__DONE', () => {
        const newMovieList = [
            {
                movieE: 'movieE'
            },
            {
                movieB: 'movieC'
            },
            {
                movieA: 'movieD'
            },
        ]

        const newSortOrder = 'asc'
        const newSortBy = 'release_date'
        const newMovieFilterID= 'idA'
        const newFilter = 'Adventure'

        const initialState = {
            foo: 'bar',
            movieList: [
                {
                    movieA: 'movieA'
                },
                {
                    movieB: 'movieB'
                },
                {
                    movieE: 'movieE'
                },
            ],
            movieFilterID: null,
            filters: '',
        }

        const expectedState = {
            ...initialState,
            movieList: newMovieList,
            movieFilterID: newMovieFilterID,
            filters: newFilter,
            sortBy: newSortBy,
            sortOrder: newSortOrder
        }

        const action = {
            type: 'MOVIES__SORT__AND__FILTER__DONE',
            payload:
                {
                    moviesData: newMovieList,
                    movieFilterID: newMovieFilterID,
                    filters: newFilter,
                    sortBy: newSortBy,
                    sortOrder: newSortOrder
                }
        }

        expect(rootReducer(initialState, action)).toEqual(expectedState)
    })
});
