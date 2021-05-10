import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import Search from './Search'
import Button from '../Button'

import Modal from '../Modal'
import AddMovie from '../Modal/AddMovie'

import CM from './styles.module.css'

const Header = () => {
    const [openModal, setOpenModal] = useState(false)

    function handleClick() {
        setOpenModal(true)
    }

    function handleModalClose() {
        setOpenModal(false)
    }

    return <div className={CM.header}>
        <Link className={CM.logo} href={'/'}>
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
        <Button
            kind="aux"
            className={CM.buttonAddMovie}
            onClick={handleClick}>
            + Add Movie
        </Button>
        <Search/>

        { openModal ? <Modal onModalClose={handleModalClose}>
                <AddMovie />
            </Modal> : ''
        }
    </div>
}

Header.propTypes = {
    genres: PropTypes.array,
};

export default Header
