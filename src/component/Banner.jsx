import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import SlideImage1 from '../assets/images/banner.jpg';
import SlideImage2 from '../assets/images/slide2.webp';
import SlideImage3 from '../assets/images/slide3.jpg';
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
            title: "We are here to help you",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.",
            button: "Read More",
            image: SlideImage1
        },
        {
            id: "2",
            title: "Your Trusted Partner",
            description: "Explore innovative solutions with us to achieve your goals.",
            button: "Learn More",
            image: SlideImage2
        },
        {
            id: "3",
            title: "Achieve Success Together",
            description: "We provide expertise and guidance for your business growth.",
            button: "Contact Us",
            image: SlideImage3
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
                        <div className="col-12">
                            <div className={`slider-content text-white ${isAnimating ? "animate" : ""}`}>
                                <h1 className="title">{bannerContent[activeSlide]?.title || bannerContent[0].title}</h1>
                                <p className="description">{bannerContent[activeSlide]?.description || bannerContent[0].description}</p>
                                <button className="btn btn-primary rounded-pill">
                                    {bannerContent[activeSlide]?.button || bannerContent[0].button} <GoArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
