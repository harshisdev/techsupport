import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banner1 from "../assets/images/banner-1.jpg";
import Banner2 from "../assets/images/banner-2.jpg";
import Banner3 from "../assets/images/banner-3.jpg";
import Banner4 from "../assets/images/banner-4.jpg";
import Banner5 from "../assets/images/banner-5.jpg";

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setExpanded(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [activeSlide]);

    const bannerContent = [
        {
            id: "1",
            title: "Comprehensive IT Support Solutions",
            description: "We offer a full range of IT support services to ensure your technology runs smoothly and efficiently. Our expert team is dedicated to providing proactive solutions for hardware and software issues, network management, cybersecurity, and system optimizations. Whether you need troubleshooting, system installations, or ongoing maintenance, we’re here to support your business at every stage. Our goal is to minimize downtime, improve productivity, and deliver reliable technology solutions tailored to your needs, so you can focus on what matters most – growing your business.",
            image: Banner3
        },
        {
            id: "2",
            title: "Your Code & Our Support",
            description: "We provide comprehensive developer support to help developers overcome technical challenges and streamline their development processes. Our team offers expert guidance in debugging, troubleshooting, and resolving issues across various programming languages and frameworks. We assist with optimizing code, ensuring smooth integrations, and providing solutions for performance improvements",
            image: Banner1
        },
        {
            id: "3",
            title: "Printer Rental & Support Solutions",
            description: "We provide comprehensive support for our rental printers to ensure that your printing needs are met seamlessly. Our dedicated support team is available to assist with setup, troubleshooting, and maintenance of the rental printers, ensuring they are always functioning at their best",
            image: Banner2
        },

        {
            id: "4",
            title: "IT Manpower Backup & Engineer Support",
            description: "We offer reliable IT manpower backup services, providing skilled engineers to support your business during critical times. Whether you need temporary or ongoing assistance, our engineers are equipped to handle a wide range of IT tasks, from troubleshooting and system maintenance to network support and installations. Our flexible staffing solutions ensure that your operations continue smoothly, even during peak demand periods or unexpected staff shortages. With our experienced IT professionals, you can maintain productivity and minimize disruptions, knowing you have expert support whenever you need it.",
            image: Banner4
        },
        {
            id: "5",
            title: "Network Support, AMC, & Maintenance Services",
            description: "We offer comprehensive network support, Annual Maintenance Contracts (AMC), and ongoing maintenance services to ensure the optimal performance and security of your IT infrastructure. Our expert team is dedicated to managing and maintaining your network, addressing any issues that arise promptly, and implementing preventive measures to avoid future disruptions. From routine check-ups and system updates to troubleshooting and repair, we provide tailored solutions to meet the unique needs of your business. With our AMC services, you can rest assured that your network will remain reliable, secure, and efficient, minimizing downtime and enhancing overall productivity.",
            image: Banner5
        }
    ];

    const ReadMore = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    const settings = {
        dots: false,
        arrow: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
        afterChange: (current) => {
            setIsAnimating(true);
            setActiveSlide(current);
        },
    };

    return (
        <div className="slider-banner position-relative">
            {/* Slider */}
            <Slider {...settings}>
                {bannerContent.map((item) => (
                    <div className="slider-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </Slider>
            <div className='overlaplayer'></div>

            {/* Banner Content */}
            <div className="position-absolute w-100 bottom-0 z-2">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8">
                            <div className={`slider-content text-white ${isAnimating ? "animate" : ""}`}>
                                <h1 className="title">{bannerContent[activeSlide]?.title || bannerContent[0].title}</h1>
                                <p className={`description ${expanded ? "d-block" : ""} `}>{bannerContent[activeSlide]?.description || bannerContent[0].description}</p>
                                <a onClick={ReadMore} className="cursor-pointer text-primary fs-custom">
                                    {expanded ? " Show Less" : " Read More"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
