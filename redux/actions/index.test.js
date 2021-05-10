import sinon from 'sinon'

import {
    resetApp,
    loadMovies,
    addMovie,
    deleteMovie,
    editMovie,
    getMovie
} from './index'

//
// ----------------- Transparent box test
//

describe('"resetApp" action creator', () => {
    it('produces correct action', () => {
        const actual = resetApp()

        const expected = {
            type: 'RESET__APP'
        }

        expect(actual).toEqual(expected)
    })
});

describe('"loadMovies" action creator', () => {

    it('dispatches "MOVIES__LOAD__INIT" action', () => {
        const dispatch = sinon.spy()
        const loadMoviesServiceMock = () => Promise.resolve()

        const thunkAction = loadMovies({ __loadMoviesService: loadMoviesServiceMock })
        thunkAction(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIES__LOAD__INIT'
        })
    })

    it('calls service function with correct params', () => {
        const search = 'foobar'
        const loadMoviesServiceMock = sinon.spy(() => Promise.resolve())

        const thunkAction = loadMovies({ search, __loadMoviesService: loadMoviesServiceMock })
        thunkAction(Function.prototype)

        const loadMoviesServiceMockCalls = loadMoviesServiceMock.getCalls()

        expect(loadMoviesServiceMockCalls.length).toEqual(1)
        expect(loadMoviesServiceMockCalls[0].args[0]).toEqual({
            sortBy: 'release_date',
            sortOrder: 'desc',
            filters: '',
            search,
            searchBy: 'title'
        })
    })

    it('dispatches "MOVIES__LOAD__DONE" action after successfull service function call', (done) => {
        const search = 'foobar'
        const moviesData = {}

        const dispatch = sinon.spy()
        const loadMoviesServiceMock = () => Promise.resolve(moviesData)

        const thunkAction = loadMovies({ search, __loadMoviesService: loadMoviesServiceMock })
        thunkAction(dispatch).then(() => {
            const dispatchCalls = dispatch.getCalls()

            expect(dispatchCalls.length).toEqual(2)
            expect(dispatchCalls[1].args[0]).toEqual({
                type: 'MOVIES__LOAD__DONE',
                payload: {
                    moviesData,
                    search
                }
            })
            done()
        })
    })
})

describe('"addMovie" action creator', () => {

    it('dispatches "MOVIE__ADD__INIT" action', () => {
        const dispatch = sinon.spy()
        const addMovieServiceMock = () => Promise.resolve()

        const thunkAction = addMovie({ __addMovieService: addMovieServiceMock })
        thunkAction(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIE__ADD__INIT'
        })
    })

    it('calls service function with correct params', () => {
        const movieInfo = {
            A: 'A',
            B: 'B'
        }
        const addMovieServiceMock = sinon.spy(() => Promise.resolve())

        const thunkAction = addMovie({ movieInfo, __addMovieService: addMovieServiceMock })
        thunkAction(Function.prototype)

        const addMovieServiceMockCalls = addMovieServiceMock.getCalls()

        expect(addMovieServiceMockCalls.length).toEqual(1)
        expect(addMovieServiceMockCalls[0].args[0]).toEqual(movieInfo)
    })

    it('dispatches "MOVIE__ADD__DONE" action after successfull service function call', (done) => {
        const movieInfo = {
            A: 'A',
            B: 'B'
        }
        const moviesData = {}

        const dispatch = sinon.spy()
        const addMovieServiceMock = () => Promise.resolve(moviesData)

        const thunkAction = addMovie({ movieInfo, __addMovieService: addMovieServiceMock })

        thunkAction(dispatch).then(() => {
            const dispatchCalls = dispatch.getCalls()

            expect(dispatchCalls.length).toEqual(2)
            expect(dispatchCalls[1].args[0]).toEqual({
                type: 'MOVIE__ADD__DONE',
                payload: moviesData
            })
            done()
        })
    })
})

describe('"deleteMovie" action creator', () => {

    it('dispatches "MOVIE__DELETE__INIT" action', () => {
        const dispatch = sinon.spy()
        const deleteMovieServiceMock = () => Promise.resolve()

        const thunkAction = deleteMovie({ __deleteMovieService: deleteMovieServiceMock })
        thunkAction(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIE__DELETE__INIT'
        })
    })

    it('calls service function with correct params', () => {
        const movieId = 'foobar'
        const deleteMovieServiceMock = sinon.spy(() => Promise.resolve())

        const thunkAction = deleteMovie({ movieId, __deleteMovieService: deleteMovieServiceMock })
        thunkAction(Function.prototype)

        const deleteMovieServiceMockCalls = deleteMovieServiceMock.getCalls()

        expect(deleteMovieServiceMockCalls.length).toEqual(1)
        expect(deleteMovieServiceMockCalls[0].args[0]).toEqual(movieId)
    })

    it('dispatches "MOVIE__DELETE__DONE" action after successfull service function call', (done) => {
        const movieId = 123

        const dispatch = sinon.spy()
        const deleteMovieServiceMock = () => Promise.resolve()

        const thunkAction = deleteMovie({ movieId, __deleteMovieService: deleteMovieServiceMock })
        thunkAction(dispatch).then(() => {
            const dispatchCalls = dispatch.getCalls()

            expect(dispatchCalls.length).toEqual(2)
            expect(dispatchCalls[1].args[0]).toEqual({
                type: 'MOVIE__DELETE__DONE',
                payload: movieId
            })
            done()
        })
    })

})

describe('"editMovie" action creator', () => {

    it('dispatches "MOVIE__EDIT__INIT" action', () => {
        const dispatch = sinon.spy()
        const editMovieServiceMock = () => Promise.resolve()

        const thunkAction = editMovie({ __editMovieService: editMovieServiceMock })
        thunkAction(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIE__EDIT__INIT'
        })
    })

    it('calls service function with correct params', () => {
        const movieInfo = {
            A: 'A',
            B: 'B'
        }
        const editMovieServiceMock = sinon.spy(() => Promise.resolve())

        const thunkAction = editMovie({ movieInfo, __editMovieService: editMovieServiceMock })
        thunkAction(Function.prototype)

        const editMovieServiceMockCalls = editMovieServiceMock.getCalls()

        expect(editMovieServiceMockCalls.length).toEqual(1)
        expect(editMovieServiceMockCalls[0].args[0]).toEqual(movieInfo)
    })

    it('dispatches "MOVIE__DELETE__DONE" action after successfull service function call', (done) => {
        const movieInfo = {
            A: 'A',
            B: 'B',
            C: 'C'
        }

        const moviesData = [
            {
                A: 'A',
                B: 'B',
                C: 'C'
            },
            {
                A: 'A'
            }
        ]

        const dispatch = sinon.spy()
        const editMovieServiceMock = () => Promise.resolve(moviesData)

        const thunkAction = editMovie({ movieInfo, __editMovieService: editMovieServiceMock })
        thunkAction(dispatch).then(() => {
            const dispatchCalls = dispatch.getCalls()

            expect(dispatchCalls.length).toEqual(2)
            expect(dispatchCalls[1].args[0]).toEqual({
                type: 'MOVIE__EDIT__DONE',
                payload: moviesData
            })
            done()
        })
    })

})

describe('"getMovie" action creator', () => {

    it('dispatches "MOVIE__GET__INIT" action', () => {
        const dispatch = sinon.spy()
        const getMovieServiceMock = () => Promise.resolve()

        const thunkAction = getMovie({ __getMovieService: getMovieServiceMock })
        thunkAction(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIE__GET__INIT'
        })
    })

    it('calls service function with correct params', () => {
        const movieId = 'foobar'
        const getMovieServiceMock = sinon.spy(() => Promise.resolve())

        const thunkAction = getMovie({ movieId, __getMovieService: getMovieServiceMock })
        thunkAction(Function.prototype)

        const getMovieServiceMockCalls = getMovieServiceMock.getCalls()

        expect(getMovieServiceMockCalls.length).toEqual(1)
        expect(getMovieServiceMockCalls[0].args[0]).toEqual(movieId)
    })

    it('dispatches "MOVIE__GET__DONE" action after successfull service function call', (done) => {
        const movieId = '1';

        const movieData = {
            A: 'A',
            B: 'B'
        }

        const dispatch = sinon.spy()
        const getMovieServiceMock = () => Promise.resolve(movieData)

        const thunkAction = getMovie({ movieId, __getMovieService: getMovieServiceMock })
        thunkAction(dispatch).then(() => {
            const dispatchCalls = dispatch.getCalls()

            expect(dispatchCalls.length).toEqual(2)
            expect(dispatchCalls[1].args[0]).toEqual({
                type: 'MOVIE__GET__DONE',
                payload: movieData
            })
            done()
        })
    })

})
