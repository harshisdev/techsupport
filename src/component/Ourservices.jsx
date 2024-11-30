import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import ourIcon from '../assets/images/our1.png'

const Ourservices = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        dots: false,
        arrow: false,
    };
    const ourServicesData = [
        {
            id: '1',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '2',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '3',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '4',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '5',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '6',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '7',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
        {
            id: '8',
            img: ourIcon,
            title: 'Network Solutions',
            desc: 'We offer a wide range of web development services to help businesses and individuals create and maintain their websites.'
        },
    ]
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3 data-aos="zoom-in" className='doticon my-4'>Our Services</h3>
                </div>
                <div className='py-3'>
                    <Slider {...settings}>
                        {
                            ourServicesData.map((item) =>
                                <div className='our-services' key={item.id}>
                                    <div className="card p-3 position-relative">
                                        <div className='imgserviceslap'></div>
                                        <div className="card-body" >
                                            <img src={ourIcon} alt="Network Solutions" />
                                            <h5 className="card-title text-white">{item.title}</h5>
                                            <p className="card-text text-white">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </Slider>
                </div>
                <p className='text-center'>We have an amazing variety of services to offer so <Link to="/services" className="ps-2 text-primary text-decoration-none text-uppercase fs-custom">
                    See All Services <span><GoArrowUpRight /></span></Link></p>
            </div>
        </div>
    )
}

export default Ourservices
