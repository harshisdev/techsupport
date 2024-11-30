import React from 'react'
import OurTeam from '../assets/images/tech-man.webp'
import Slider from 'react-slick'
import { CiFacebook } from 'react-icons/ci'

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
                    <h3 className='doticon mb-4'>Meet our team of experts</h3>
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
                                                    <a href="#" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </a>
                                                    <a href="#" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </a>
                                                    <a href="#" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </a>
                                                    <a href="#" className='text-bg-light rounded-pill d-flex align-items-center justify-content-center' style={{ width: '40px', height: '40px' }}><CiFacebook />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-3 text-center'>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.designation}</p>
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