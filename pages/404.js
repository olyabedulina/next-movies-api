import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from "../components/Button";
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'

import CM from '../styles/not-found.module.css'

const NotFoundPage = () => {

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                <div className={CM.pageNotFound}>
                    <Link href={'/'}>
                        <a className={CM.pageNotFoundLogo}>
                            <Image
                                className={CM.pageNotFoundLogoImage}
                                src='/images/logo.png'
                                alt='Netflix roulette'
                                width={150}
                                height={85}
                            />
                        </a>
                    </Link>
                    <h1 className={CM.pageNotFoundTitle}>Page not found</h1>
                    <Image
                        className={CM.pageNotFoundImage}
                        src='/images/404-not-found.png'
                        alt='Page Not Found'
                        width={943}
                        height={253}
                    />
                    <Link href={'/'}>
                        <a>
                            <Button
                                kind='alt'
                                className={CM.pageNotFoundButton}>
                                Go Back To Home
                            </Button>
                        </a>
                    </Link>
                </div>
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default NotFoundPage
