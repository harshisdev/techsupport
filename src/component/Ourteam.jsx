import React from 'react'
import OurTeam from '../assets/images/tech-man.webp'
import Slider from 'react-slick'
import { CiFacebook } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Ourteam = () => {
    const ourTeam = [
        {
            id: 1,
            name: 'Our Team',
            designation: 'Project Manager',
            img: OurTeam
        },
        {
            id: 2,
            name: 'Our Team',
            designation: 'Project Manager',
            img: OurTeam
        },
        {
            id: 3,
            name: 'Our Team',
            designation: 'Project Manager',
            img: OurTeam
        },
        {
            id: 4,
            name: 'Our Team',
            designation: 'Project Manager',
            img: OurTeam
        }
    ]
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        dots: false,
        arrow: false,
    };
    return (
        <div className='container pb-5'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3  data-aos="zoom-in" className='doticon mb-4'>Meet Our Team of Experts</h3>
                </div>
            </div>
            <div className='mt-4'>
                <Slider {...settings}>
                    {
                        ourTeam.map((item) => {
                            return (
                                <>
                                    <div className="our-services mettyour">
                                        <div key={item.id} className="card border-0">
                                            <img src={item.img} className="card-img-top rounded transform-none" alt={item.name} />
                                            <div className="card-body text-center">
                                                <div className='card-title d-flex justify-content-between'>
                                                    <Link data-aos="fade-left" to="" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </Link>
                                                    <Link data-aos="zoom-in"  to="" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </Link>
                                                    <Link data-aos="zoom-in"  to="" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </Link>
                                                    <Link data-aos="fade-right"  to="" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  data-aos="zoom-in" className='pt-3 text-center'>
                                        <h5 className="card-title fs-6">{item.name}</h5>
                                        <p className="card-text fs-custom">{item.designation}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </div >
    )
}

export default Ourteam
