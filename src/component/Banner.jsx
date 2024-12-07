import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banner1 from "../assets/images/banner-1.jpg";
import Banner2 from "../assets/images/banner-2.jpg";
import Banner3 from "../assets/images/banner-3.jpg";
import Banner4 from "../assets/images/banner-4.jpg";
import Banner5 from "../assets/images/banner-5.jpg";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Start with the first slide
    const [isAnimating, setIsAnimating] = useState(true);

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
            setActiveSlide(current); // Update the active slide
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false); // Stop the animation after 4 seconds
        }, 4000);

        return () => clearTimeout(timer); // Cleanup the timer
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
            title: "Your Code, Our Support",
            description: "We provide comprehensive developer support to help developers overcome technical challenges and streamline their development processes. Our team offers expert guidance in debugging, troubleshooting, and resolving issues across various programming languages and frameworks. We assist with optimizing code, ensuring smooth integrations, and providing solutions for performance improvements",
            image: Banner1
        },
        {
            id: "3",
            title: "Printer Rental and Support Solutions.",
            description: "We provide comprehensive support for our rental printers to ensure that your printing needs are met seamlessly. Our dedicated support team is available to assist with setup, troubleshooting, and maintenance of the rental printers, ensuring they are always functioning at their best",
            image: Banner2
        },

        {
            id: "4",
            title: "Achieve Success Together",
            description: "We provide expertise and guidance for your business growth.",
            image: Banner4
        },
        {
            id: "5",
            title: "Achieve Success Together",
            description: "We provide expertise and guidance for your business growth.",
            image: Banner5
        }
    ];

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
                                <p className="description lh-lg">{bannerContent[activeSlide]?.description || bannerContent[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
