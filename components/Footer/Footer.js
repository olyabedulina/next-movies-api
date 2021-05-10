import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CM from './styles.module.css'

const Footer = () => {

    return <div className={CM.footer}>
        <Link href={'/'}>
            <a className={CM.logo}>
                <Image
                    className={CM.logoImage}
                    src='/images/logo.png'
                    alt='Netflix roulette'
                    width={150}
                    height={85}
                />
            </a>
        </Link>
    </div>
}

export default Footer
