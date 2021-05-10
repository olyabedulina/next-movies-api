import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import DropdownControlled from '../DropdownControlled'

import CM from './styles.module.css'
// import { sortMoviesBy } from '../../redux/actions'
import { sortAndFilterMoviesBy } from '../../redux/actions'

import { useSelector } from "react-redux";
import {getSearchQuery} from "../../redux/selectors";

const sortNameToDisplayNameMap = {
    release_date: 'Release date',
    title: 'Title',
    vote_average: 'Rating'
}

const ResultsSort = ({
    sortBy,
    sortOrder,
    selectedItem,
    filters,
    isOpenedDropdown,
    onIsOpenedDropdownChange
}) => {
    const dispatch = useDispatch()
    const searchQuery = useSelector(getSearchQuery)

    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={CM.resultsSortCriterion}>
            <DropdownControlled
                theme='resultsSortCriterion'
                placeholder={sortNameToDisplayNameMap[sortBy]}
                isOpened={isOpenedDropdown}
                onIsOpenedChange={onIsOpenedDropdownChange}
            >
                <div onClick={() => {
                    dispatch(sortAndFilterMoviesBy('release_date', sortOrder, filters, selectedItem, searchQuery, 'title'));
                    onIsOpenedDropdownChange();
                }}>Release date</div>
                <div onClick={() => {
                    dispatch(sortAndFilterMoviesBy('title', sortOrder, filters, selectedItem, searchQuery, 'title'));
                    onIsOpenedDropdownChange();
                }}>Title</div>
                <div onClick={() => {
                    dispatch(sortAndFilterMoviesBy('vote_average', sortOrder, filters, selectedItem, searchQuery, 'title'));
                    onIsOpenedDropdownChange();
                }}>Rating</div>
            </DropdownControlled>
        </div>

    </div>
}

ResultsSort.propTypes = {
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string,
    isOpenedDropdown: PropTypes.bool,
    onIsOpenedDropdownChange : PropTypes.func
};

export default ResultsSort
