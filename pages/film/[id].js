import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export default function Film({ film: serverFilm }) {
    const [film, setFilm] = useState(serverFilm)

    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/films/${router.query.id}`)
            const data = await response.json()

            setFilm(data)
        }

        if (!serverFilm) {
            load()
        }
    }, [])

    if (!film) {
        return <MainLayout>
            <Head>
                <title>Film Page</title>
            </Head>
            <p>Loading ...</p>
        </MainLayout>
    }

    return <>
        <MainLayout>
            <Head>
                <title>Film Page</title>
            </Head>
            <h1>Film number {router.query.id} </h1>
            <h1>{film.title}</h1>
            <p>{film.body}</p>
            <Link href={'/films'}><a>Back to all films</a></Link>
        </MainLayout>
    </>
}

// Film.getInitialProps = async ({ query, req }) => {
//     if (!req) {
//         return { film: null }
//     }
//
//     const response = await fetch(`http://localhost:4200/films/${query.id}`)
//     const film = await response.json()
//
//     return {
//         film
//     }
// }

export async function getServerSideProps({ query, req }) {
    if (!req) {
        return { film: null }
    }

    const response = await fetch(`http://localhost:4200/films/${query.id}`)
    const film = await response.json()

    return { props: { film } }
}
