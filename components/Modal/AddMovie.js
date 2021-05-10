import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {useDispatch, useSelector} from 'react-redux'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.module.css'
import { addMovie } from '../../redux/actions'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getFilterItems } from '../../redux/selectors'

const AddMovie = ({
    children
}) => {

    const [selectedGenres, setSelectedGenres] = useState([])
    const [selectedGenresError, setSelectedGenresError] = useState(false)
    const [movieIsSaved, setMovieIsSaved] = useState(false)

    const genres = useSelector(getFilterItems) || []
    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)

        if (nextSelectedGenres.length > 0) {
            setSelectedGenresError(false)
        }
    }

    function handleResetButtonClick() {
        formik.resetForm()
    }

    function handleSubmitClick() {
        if (selectedGenres.length === 0) {
            setSelectedGenresError(true)
            return
        }

        const newMovie = {
            title: formik.values.title,
            release_date: formik.values.selectDate,
            poster_path: formik.values.movieURL,
            overview: formik.values.overview,
            runtime: parseInt(formik.values.runtime),
            genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        }

        dispatch(addMovie({ movieInfo: newMovie }))
        setMovieIsSaved(true)
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            selectDate: '',
            movieURL: '',
            overview: '',
            runtime: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(500, 'Must be 500 characters or less')
                .required('Title is required'),
            movieURL: Yup.string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    'Enter correct movie URL!'
                )
                .required('Movie URL is required'),
            overview: Yup.string()
                .max(1000, 'Must be 1000 characters or less')
                .required('Overview is required'),
            selectDate: Yup.string().required('Release date is required'),
            runtime: Yup.number()
                .positive()
                .moreThan(0).required('Runtime is required'),
        }),
        onSubmit: values => {
            handleSubmitClick()
        },
    });

    return (!movieIsSaved) ? <form onSubmit={formik.handleSubmit}>
                <div data-testid="modalContainerItem" className={CM.modalContainerItem}>
                    <h3>Add movie</h3>
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
                <div data-testid="formButtons" className={CM.modalFooter}>
                    <Button
                        kind='alt'
                        className={CM.modalFooterButton}
                        onClick={handleResetButtonClick}>
                        Reset
                    </Button>
                    <Button
                        type='submit'
                        kind='main'
                        className={CM.modalFooterButton}
                    >
                        Submit
                    </Button>
                </div>
            </form> : <div className={CM.modalCongratulations}>
                        <h2 className={CM.modalCongratulationsTitle}>Congratulations!</h2>
                        <div className={CM.modalCongratulationsText}>The movie has been added to database successfully.</div>
                      </div>
}

AddMovie.propTypes = {
    children: PropTypes.node
};

export default AddMovie
