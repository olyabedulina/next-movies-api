import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Nav from '../../components/Nav'
import SearchResult from '../../components/SearchResult'
import Footer from '../../components/Footer'
import ErrorBoundary from '../../components/ErrorBoundary'
import MovieDetails from '../../components/MovieDetails'

import { useRouter } from "next/router";
import {
    getMovie as getMovieService
} from '../../services'

import { getMovie } from "../../redux/actions";
import { getCurrentMovie } from '../../redux/selectors'

const MoviePage = ({ film: serverFilm }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const movieId = router.query.id

    useEffect(() => {
        async function load() {
            dispatch(getMovie({ movieId }))
        }

        if (serverFilm) {
            // save received server state to redux
            dispatch({
                type: 'MOVIE__GET__DONE',
                payload: serverFilm
            })
        }
        else {
            // if no data from server, use redux api calls
            load()
        }
    }, [])

    const movie = serverFilm || useSelector(getCurrentMovie)
    // console.log("movie = ", movie)

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                <MovieDetails movie={movie} />
                <Nav />
                <SearchResult />
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default MoviePage

export async function getServerSideProps({ query, req }) {
    if (!req) {
        return { props: { film: null } }
    }

    const response = await getMovieService(query.id)
    const film = await response

    console.log("film= ", film)

    return { props: { film } }
}
