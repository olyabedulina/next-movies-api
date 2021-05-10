import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'
import { useDispatch } from 'react-redux'
import { sortAndFilterMoviesBy } from '../../redux/actions'

import {getFilterItems, getSearchQuery} from '../../redux/selectors'
import { useSelector } from "react-redux";

const FilterListItem = ({
    data,
    index,
    selectedItem,
    filters,
    sortBy,
    sortOrder
}) => {
    const dispatch = useDispatch()
    const filterItems = useSelector(getFilterItems)
    const searchQuery = useSelector(getSearchQuery)

    function handleClick(event) {
        event.preventDefault();

        const filters = filterItems.find(({id}) => (id == data.id)).name;
        // dispatch(filterMoviesBy((filters.includes('All')) ? '' : filters, data.id));
        dispatch(sortAndFilterMoviesBy(sortBy, sortOrder, (filters.includes('All')) ? '' : filters, data.id, searchQuery, 'title'));
    }

    return <li className={(data.id === selectedItem) ? `${CM.resultsFilterItem} ${CM.selected}`: `${CM.resultsFilterItem}`}>
        <a
            href="#"
            className={CM.resultsFilterLink}
            onClick={handleClick}
        >{data.name}</a>
    </li>
}

FilterListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        isSelected: PropTypes.bool
    }).isRequired,
    index: PropTypes.number,
    selectedItem: PropTypes.string
};

export default FilterListItem
