import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='text-bg-light py-3'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <p className="mb-0 fs-custom">© 2024 All Rights Reserved by <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXX" className="text-decoration-none text-bg-light">TechSupport</a></p>
                        <p className="mb-0 fs-custom">Made with <span className='fs-6 text-primary'><FaHeart /></span> Harsh</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
