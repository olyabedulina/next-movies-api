import React from 'react'
import PropTypes from 'prop-types'

import FilterListItem from './FilterListItem'

import CM from './styles.module.css'

const FilterList = ({
    items,
    selectedItem,
    filters,
    sortBy={sortBy},
    sortOrder={sortOrder}
}) => {

    return (items.length > 0) ? <ul className={CM.resultsFilter}>
        {
            items.map((item, index) => <FilterListItem
                    key={item.id}
                    data={item}
                    index={index}
                    selectedItem={selectedItem}
                    filters={filters}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                />
            )
        }
    </ul> : <div className={CM.noFilterItems}>No filter items</div>

    // /* Generate error for ErrorBoundary */
    // throw Error("Filter List Test Error!");
    // return <></>;
}

FilterList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isSelected: PropTypes.bool,
            isIncludedInFilter: PropTypes.bool
        })
    ).isRequired,
    selectedItem: PropTypes.string
};

export default FilterList
