import { useState, useEffect } from 'react';
import Head from "next/head"
import MainLayout from '../components/MainLayout'
import Link from 'next/link'

export default function Films({ films: serverFilms }) {

    const [films, setFilms] = useState(serverFilms)

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/films')
            const json = await response.json()
            setFilms(json)
        }

        if (!serverFilms) {
            load()
        }
    }, [])

    if (!films) {
        return <MainLayout>
            <Head>
                <title>Films Page</title>
            </Head>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <Head>
                <title>Films Page</title>
            </Head>
            <h1>Films page</h1>
            {/*<pre>{JSON.stringify(films, null, 2)}</pre>*/}
            <ul>
                {films.map((film) => {
                    return (
                        <li key={film.id}>
                            {/*<Link href={`/film/${film.id}`}>*/}
                            <Link href={`/film/[id]`} as={`/film/${film.id}`}>
                                <a>{film.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </MainLayout>
    )
}

Films.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return { films: null }
    }

    const response = await fetch('http://localhost:4200/films')
    const films = await response.json()

    return {
        films
    }
}
