import React from 'react'

import SearchResultList from './SearchResultList'

import CM from './styles.module.css'
import { useSelector } from "react-redux";
import { getSearchResultItems } from "../../redux/selectors";

const SearchResult = () => {

    const searchResultItems = useSelector(getSearchResultItems)

    const onMovieImageClick = () => {
        console.log('image click')
    }

    return <div className={CM.searchResult}>
        <div className={CM.searchCount}>
            <strong className={CM.searchCountHightlight}>
                { (searchResultItems.length > 0) ? searchResultItems.length + ' movies found' : '' }
            </strong>
        </div>
        <SearchResultList
            items={searchResultItems}
        />
    </div>
}

export default SearchResult
