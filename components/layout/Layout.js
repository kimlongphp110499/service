import React from 'react'
import Footer from './Footer'
import Header from './Header'
import PageTitle from './PageTitle'
import Head from 'next/head'

function Layout({ children, pageTitle, subTitle }) {
    return (
        <>
            <Head>
                <title>CoinGain - Earn Free CS:GO Skins, Cryptocurrencies & Gift Cards</title>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <div id="main-wrapper">
                <Header />

                <PageTitle pageTitle={pageTitle} subTitle={subTitle} />

                {children}
                <Footer />
            </div>

        </>
    )
}

export default Layout
