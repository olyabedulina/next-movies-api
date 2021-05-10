import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Footer from "../components/Footer";
import Header from "../components/Header";
import ErrorBoundary from '../components/ErrorBoundary'
import Nav from '../components/Nav'
import SearchResult from '../components/SearchResult'

import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { initApp } from "../redux/actions";
import { resetApp } from "../redux/actions";

export default function Index() {

  const dispatch = useDispatch()
  const router = useRouter()
  const { search } = router.query

  useEffect(() => {
    if (search) {
      dispatch(initApp(search))
    }
    else {
      dispatch(resetApp())
    }
  }, [search])

  return <>
    <ErrorBoundary>
      <div id="app" className="app">
        <Header />
        <Nav />
        <SearchResult />
        <Footer />
      </div>
    </ErrorBoundary>
  </>
}
