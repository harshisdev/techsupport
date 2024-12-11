import React from 'react'
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Techservices from '../component/Techservices';
import { GoArrowUpRight } from 'react-icons/go';
import aboutImg from '../assets/images/about-img.jpg'
import Ourservices from '../component/Ourservices';
import { Link } from 'react-router-dom';
import Techindex from '../component/Techindex';
import Ourteam from '../component/Ourteam';
import Footer from '../component/Footer';
import ScrollToTopButton from '../component/ScrollToTopButton';
import Faq from '../component/Faq';
import { Helmet } from 'react-helmet';
import { FaRegCheckCircle } from 'react-icons/fa';

const Home = () => {

    return (
        <>
            <Helmet>
                <title>IT Services Group</title>
            </Helmet>
            <Navbar activeSection='home' />
            <Banner />
            {/* <Ourclient /> */}
            <Techservices />
            <div className='container'>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h3 data-aos="zoom-in" className='doticon mb-3'>Who We bring</h3>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <h5 className='mb-0'>Exclusive Technology to Provide IT Solutions & Services</h5>
                        <p className='border-bottom py-4 mb-0'>We have over 3+ years of experience in all stages of software design, development, maintenance, and support.</p>
                        <ul style={{ listStyle: 'none' }} className='mt-4 m-0 px-3 d-flex'>
                            <li  data-aos="zoom-in" className='w-50'><FaRegCheckCircle className='text-primary me-2' />
                                IT Professional services
                            </li>
                            <li  data-aos="zoom-in" className='w-50'><FaRegCheckCircle className='text-primary me-2' />
                                IT Professional services
                            </li>
                        </ul>
                        <ul style={{ listStyle: 'none' }} className='mt-4 mb-0 px-3 d-flex'>
                            <li data-aos="zoom-in" className='w-50'><FaRegCheckCircle className='text-primary me-2' />
                                IT Professional services
                            </li>
                            <li data-aos="zoom-in" className='w-50'><FaRegCheckCircle className='text-primary me-2' />
                                IT Professional services
                            </li>
                        </ul>
                        <p className='py-4 mb-0'>Our teams know how to harness the power of data, artificial intelligence, modernising core, optimising and automating operations to achieve your business goals.</p>
                        <Link to="/about" className='btn btn-primary rounded-pill text-uppercase'>More About Us <GoArrowUpRight /></Link>
                    </div>
                    <div className="col-6" data-aos="fade-left">
                        <img style={{ width: '100%', height: 'auto', borderRadius: '10px' }} src={aboutImg} alt="Who We bring" />
                    </div>
                </div>
            </div>
            <div style={{ background: '#f4f7fb' }}>
                <Ourservices />
            </div>
            <Techindex />
            <Ourteam />
            <Faq />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default Home;
