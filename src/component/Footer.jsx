import React from 'react'
import { CiClock2, CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { IoLogoInstagram, IoMailUnreadOutline } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='text-bg-light py-3 border-bottom'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 text-black fs-custom">
                            <span className='d-block'><CiClock2 className='text-primary' /> 24/7</span>
                            <br />
                            <SlLocationPin className='me-2 text-primary' />  New Delhi, Noida, Gurgaon
                        </div>
                        <div className="col-4 fs-custom justify-content-center d-flex">
                            <Link data-aos="zoom-in" className='text-primary fs-5' to="" target="_blank"><CiFacebook /></Link>
                            <Link data-aos="zoom-in" className='text-primary fs-5 ms-3' to="" target="_blank"><RiTwitterXLine />
                            </Link>
                            <Link data-aos="zoom-in" className='text-primary fs-5 ms-3' to="" target="_blank"><IoLogoInstagram />
                            </Link>
                            <Link data-aos="zoom-in" className='text-primary fs-5 ms-3' to="" target="_blank"><CiLinkedin />
                            </Link>
                        </div>
                        <div className="col-4 d-flex justify-content-end fs-custom align-items-center">
                            <Link className='text-decoration-none text-black' to="mailto:avinashjha0321@gmail.com"><IoMailUnreadOutline className='text-primary' /> avinashjha0321@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='text-bg-light py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <p className="mb-0 fs-custom">© 2024 All Rights Reserved by <Link to={window.location.href} className="text-primary text-bg-light">TechSupport.</Link></p>
                            <p className="mb-0 fs-custom">Made with <span className='fs-6 text-primary'><FaHeart /></span> Harsh</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
