import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'

const Error = () => {
    return (
        <>
            <Helmet>
                <title>404 :: Page Not Found</title>
            </Helmet>
            <Navbar />
            <div style={{ minHeight: 'calc(100vh - 150px)' }} className='container d-flex align-items-center justify-content-center'>
                <div className='text-center custom-padding'>
                    <h1 className='text-danger'>404</h1>
                    <h3 className='text-danger'>Page Not Found</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error
