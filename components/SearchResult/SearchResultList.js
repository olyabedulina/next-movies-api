import React from 'react'
import PropTypes from 'prop-types'

import SearchResultListItem from './SearchResultListItem'

import CM from './styles.module.css'

const SearchResultList = ({
    items
}) => {

  return (items.length > 0) ? <ul className={CM.moviesList}>
      {
          // items.sort(sortNameToFuncMap[sortBy]).map((item, index) => <SearchResultListItem
          items.map((item, index) => <SearchResultListItem
              key={item.id}
              data={item}
              />
          )
      }
    </ul> : <div className={CM.emptyResult}>No movie found</div>
}

SearchResultList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired
};

export default SearchResultList
