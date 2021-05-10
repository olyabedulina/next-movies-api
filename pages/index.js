import Link from 'next/link'
import Head from 'next/head'
import MainLayout from "../components/MainLayout";

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Popup from "../components/Popup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ErrorBoundary from '../components/ErrorBoundary'
import Nav from '../components/Nav'
import SearchResult from '../components/SearchResult'

export default function Index() {
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
