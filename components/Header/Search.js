import React, { useState, useEffect } from 'react'

import Button from '../Button'
import Input from '../Input'

import CM from './styles.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter()
    const { search } = router.query
    const [searchInputValue, setSearchInputValue] = useState(search || '');

    function handleInputChange(event) {
        setSearchInputValue(event.target.value)
    }

    useEffect(() => {
        setSearchInputValue(search)
    }, [search])

    return <div className={CM.search}>
        <h1 className={CM.searchTitle}>Find your movie</h1>
        <form className={CM.form}>
            <Input
                className={CM.formInput}
                placeholder="What do you want to watch?"
                type="text"
                value={searchInputValue}
                onChange={handleInputChange}
            />
            <Link href={`/?search=${searchInputValue}`}>
                <a>
                    <Button
                        type="submit"
                        className={CM.formButton}>
                        Search
                    </Button>
                </a>
            </Link>
        </form>
    </div>
}

export default Search
