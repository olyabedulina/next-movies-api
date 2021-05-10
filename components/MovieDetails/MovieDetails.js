import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CM from './styles.module.css'

const MovieDetails = ({
    movie
}) => {

    function handleMagnifierClick() {
        // onMagnifierClick()
        // navigate to home page
    }

    return movie ? <div className={CM.movieDetails}>
        <div className={CM.movieDetailsHeader}>
            <Link href={'/'}>
                <a className={CM.movieDetailsLogo}>
                    <Image
                        className={CM.logoImage}
                        src='/images/logo.png'
                        alt='Netflix roulette'
                        width={150}
                        height={85}
                    />
                </a>
            </Link>
            <Link href={'/'}>
                <a>
                    <div
                        className={CM.movieDetailsMagnifier}
                        onClick={handleMagnifierClick}
                    />
                </a>
            </Link>
        </div>
        <div className={CM.movieDetailsContainer}>
            <div className={CM.movieImage} title={movie.title}>
                <img
                    className={CM.movieImageImg}
                    src={movie.poster_path}
                    alt=''
                    title={movie.title}
                />
            </div>
            <div className={CM.movieData}>
                <div className={CM.movieName}>{movie.title}</div>
                { movie.vote_average ? <div className={CM.movieRating}>{movie.vote_average}</div> : '' }
                <div className={CM.movieGenre}>{movie.genres.map((name) => name).join(', ')}</div>
                <div className={CM.movieReleaseYear}>{movie.release_date}</div>
                { movie.runtime ? <div className={CM.movieDuration}>{`${movie.runtime} min`}</div> : '' }
                <div className={CM.movieDescription}>{movie.overview}</div>
            </div>
        </div>
    </div> : ''
}

export default MovieDetails
