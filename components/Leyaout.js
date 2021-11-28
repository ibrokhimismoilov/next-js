import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Leyaout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Leyaout
