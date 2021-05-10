import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { useDispatch } from 'react-redux'
import { deleteMovie } from '../../redux/actions'

import CM from './styles.module.css'

const DeleteMovie = ({
    item,
    onModalClose = Function.prototype
}) => {

    const dispatch = useDispatch()

    function handleConfirmClick() {
        const itemID = item.id

        dispatch(deleteMovie({ movieId: itemID }))
        onModalClose()
    }

    return <>
        <div className={CM.modalContainerItem}>
            <h3>Delete movie</h3>
        </div>
        <div className={CM.modalContainerItem}>
            <div className={CM.field}>
                <span>Are you sure you want to delete this movie?</span>
            </div>
        </div>
        <div className={CM.modalFooter}>
            <Button
                kind='main'
                onClick={handleConfirmClick}
                className={CM.modalFooterButton}>
                Confirm
            </Button>
        </div>
    </>
}

DeleteMovie.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        tagline: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        runtime: PropTypes.number,
        overview: PropTypes.string
    }),
    onModalClose: PropTypes.func
};

export default DeleteMovie
