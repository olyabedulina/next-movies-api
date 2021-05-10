import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterList from './FilterList'
import ResultsSort from './ResultsSort'

import CM from './styles.module.css'

import {getFilterItems, getFilters, getSelectedItem, getSortBy, getSortOrder} from '../../redux/selectors'

const Nav = () => {

    const filters = useSelector(getFilters)
    const sortBy = useSelector(getSortBy)
    const sortOrder = useSelector(getSortOrder)
    const filterItems = useSelector(getFilterItems)
    const selectedItem = useSelector(getSelectedItem)

    const [isOpenedDropdown, setIsOpenedDropdown] = useState(false)
    function handleIsOpenedDropdownChange() {
        setIsOpenedDropdown(!isOpenedDropdown)
    }

    return <div className={CM.nav}>
        <FilterList
            items={filterItems.filter((item) => (item.isIncludedInFilter))}
            selectedItem={selectedItem}
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
        />
        <ResultsSort
            sortBy={sortBy}
            sortOrder={sortOrder}
            selectedItem={selectedItem}
            filters={filters}
            isOpenedDropdown={isOpenedDropdown}
            onIsOpenedDropdownChange={handleIsOpenedDropdownChange}
        />
    </div>
}

export default Nav
