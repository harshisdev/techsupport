import React, { useEffect, useState } from 'react'
import { CiClock2, CiFacebook, CiLinkedin } from 'react-icons/ci'
import { IoLogoInstagram, IoMailUnreadOutline } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5"

const Navbar = ({ activeSection }) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        // Debounced scroll handler for better performance
        let timeoutId = null;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                if (window.scrollY > 0) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`position-absolute w-100 z-2 border-bottom ${activeSection === "home" ? "" : "bg-black"}`}>
                <nav className='container py-2'>
                    <div className="row align-items-center">
                        <div data-aos="zoom-in" className="col-1 text-white fs-custom">
                            <CiClock2 /> 24/7
                        </div>
                        <div data-aos="zoom-in" className="col-2 text-white text-center fs-custom">
                            <Link className='text-decoration-none text-white' to="mailto:abc@gmail.com"><IoMailUnreadOutline /> abc@gmail.com</Link>
                        </div>
                        <div data-aos="zoom-in" className="col-3 text-white fs-custom">
                            <SlLocationPin /> New Delhi, Noida, Gurgaon
                        </div>
                        <div data-aos="fade-in" className="col-6 d-flex justify-content-end">
                            <Link className='text-white fs-5' to="" target="_blank"><CiFacebook /></Link>
                            <Link className='text-white fs-5 ms-3' to="" target="_blank"><RiTwitterXLine />
                            </Link>
                            <Link className='text-white fs-5 ms-3' to="" target="_blank"><IoLogoInstagram />
                            </Link>
                            <Link className='text-white fs-5 ms-3' to="" target="_blank"><CiLinkedin />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div style={{ top: '47px' }} className={`position-absolute w-100 z-2 ${isFixed ? "fixed" : ""} ${activeSection === "home" ? "" : "bg-black"}`}>
                <nav className='container py-3'>
                    <div className="row align-items-center">
                        <div className="col-3">
                            <Link to="/"><img src="https://demo2.themelexus.com/neotech/wp-content/uploads/2024/10/logo2.svg" alt="logo" /></Link>
                        </div>
                        <div data-aos={`${activeSection === 'home' ? "zoom-in" : ""}`} className="col-6 d-flex justify-content-center">
                            <Link className={`text-white text-decoration-none fs-6 ${activeSection === 'home' ? 'active' : ''}`} to="/">Home</Link>
                            <Link className={`text-white text-decoration-none fs-6 ms-3 ${activeSection === 'about' ? 'active' : ''}`} to="/about">About</Link>
                            <Link className={`text-white text-decoration-none fs-6 ms-3 ${activeSection === 'services' ? 'active' : ''}`} to="/services">Services</Link>
                            <Link className={`text-white text-decoration-none fs-6 ms-3 ${activeSection === 'career' ? 'active' : ''}`} to="/career">Career</Link>
                            <Link className={`text-white text-decoration-none fs-6 ms-3 ${activeSection === 'contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                        </div>
                        <div className="col-3 text-end">
                            <Link className='btn btn-outline-primary rounded-pill text-white text-decoration-none shadow-sm' to="tel:7056967572"><IoCallOutline /> &nbsp;
                                +91-7056967572</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
