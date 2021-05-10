import React, { useState} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.module.css'

import { useDispatch } from "react-redux"
import { editMovie } from '../../redux/actions'

import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    }

    if (!values.movieURL) {
        errors.movieURL = 'Movie URL is required';
    } else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i.test(values.movieURL)) {
        errors.movieURL = 'Invalid url';
    }

    if (!values.overview) {
        errors.overview = 'Overview is required';
    }

    if (!values.selectDate) {
        errors.selectDate = 'Release date is required';
    }

    if (!values.runtime) {
        errors.runtime = 'Runtime is required';
    } else if (isNaN(values.runtime)) {
        errors.runtime = 'Runtime must be a number';
    } else if (!isNaN(values.runtime) && (values.runtime < 0) ) {
        errors.runtime = 'Runtime must be more than 0';
    }

    return errors;
};

const EditMovie = ({
    children,
    item,
    genres
}) => {

    const selectedGenresInitial = genres.filter( ({ name }) => (item.genres.includes(name)) ).map(({ id }) => id);
    const [selectedGenres, setSelectedGenres] = useState(selectedGenresInitial)
    const [selectedGenresError, setSelectedGenresError] = useState(false)

    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)

        if (nextSelectedGenres.length > 0) {
            setSelectedGenresError(false)
        }
    }

    function handleResetButtonClick() {
        formik.resetForm()
        setSelectedGenres(selectedGenresInitial)
    }

    function handleSubmitClick() {
        if (selectedGenres.length === 0) {
            setSelectedGenresError(true)
            return
        }

        const updatedMovie = {
            id: item.id,
            title: formik.values.title,
            release_date: formik.values.selectDate,
            poster_path: formik.values.movieURL,
            overview: formik.values.overview,
            runtime: parseInt(formik.values.runtime),
            genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        }

        dispatch(editMovie({ movieInfo: updatedMovie }))
    }

    const formik = useFormik({
        initialValues: {
            title: item.title ? item.title : '',
            selectDate: item.release_date ? item.release_date : '',
            movieURL: item.poster_path ? item.poster_path : '',
            overview: item.overview ? item.overview : '',
            runtime: item.runtime ? item.runtime : ''
        },
        validate,
        onSubmit: values => {
            handleSubmitClick()
        },
    });

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={CM.modalContainerItem}>
                <h3>Edit movie</h3>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Movie ID</span>
                        <span>{item.id}</span>
                    </label>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Title</span>
                        <Input
                            id='title'
                            name='title'
                            className={CM.fieldInput}
                            placeholder='Title here'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className={CM.fieldError}>{formik.errors.title}</div>
                        ) : null}
                    </label>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Release Date</span>
                        <Input
                            id='selectDate'
                            name='selectDate'
                            className={CM.fieldInput}
                            placeholder='Select Date'
                            type='date'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.selectDate}
                        />
                        {formik.touched.selectDate && formik.errors.selectDate ? (
                            <div className={CM.fieldError}>{formik.errors.selectDate}</div>
                        ) : null}
                    </label>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Movie URL</span>
                        <Input
                            id='movieURL'
                            name='movieURL'
                            className={CM.fieldInput}
                            placeholder='Movie URL here'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.movieURL}
                        />
                        {formik.touched.movieURL && formik.errors.movieURL ? (
                            <div className={CM.fieldError}>{formik.errors.movieURL}</div>
                        ) : null}
                    </label>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <div className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Genre</span>
                        <MultiSelect
                            placeholder="Select genre"
                            items={genres}
                            selectedItems={selectedGenres}
                            onChange={handleSelectedGenresChange}
                        />
                        {selectedGenresError ? (
                            <div className={CM.fieldError}>Select at least one genre to proceed</div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Overview</span>
                        <Input
                            id='overview'
                            name='overview'
                            className={CM.fieldInput}
                            placeholder='Overview here'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.overview}
                        />
                        {formik.touched.overview && formik.errors.overview ? (
                            <div className={CM.fieldError}>{formik.errors.overview}</div>
                        ) : null}
                    </label>
                </div>
            </div>
            <div className={CM.modalContainerItem}>
                <div className={CM.field}>
                    <label className={CM.fieldLabel}>
                        <span className={CM.fieldLabelText}>Runtime</span>
                        <Input
                            id='runtime'
                            name='runtime'
                            className={CM.fieldInput}
                            placeholder='Runtime here'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.runtime}
                        />
                        {formik.touched.runtime && formik.errors.runtime ? (
                            <div className={CM.fieldError}>{formik.errors.runtime}</div>
                        ) : null}
                    </label>
                </div>
            </div>
            <div className={CM.modalFooter}>
                <Button
                    kind='alt'
                    className={CM.modalFooterButton}
                    onClick={handleResetButtonClick}>
                    Reset
                </Button>
                <Button
                    type='submit'
                    kind='main'
                    className={CM.modalFooterButton}>
                    Submit
                </Button>
            </div>
        </form>
    </>
}

EditMovie.propTypes = {
    children: PropTypes.node,
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
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isSelected: PropTypes.bool,
            isIncludedInFilter: PropTypes.bool
        })
    )
};

export default EditMovie
