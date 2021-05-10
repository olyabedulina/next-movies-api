import Link from 'next/link'
import Head from "next/head"

export default function MainLayout({
    title = 'Default Title',
    children
}) {

    return (
        <>
            <Head>
                <title>{title} | Next app page</title>
                <meta name="keywords" content="Next, movie API" />
                <meta name="description" content="Next movie API" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home Page</a></Link>
                <Link href={'/about'}><a>About Page</a></Link>
                <Link href={'/films'}><a>Films Page</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
              nav a {
                  display: inline-block;
                  margin-right: 10px;
              }
            `}
            </style>
        </>
    )
}
