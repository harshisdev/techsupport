import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Error = () => {
    return (
        <>
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
