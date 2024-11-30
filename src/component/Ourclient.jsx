import React from 'react'
import Slider from 'react-slick'
import client1 from '../assets/images/client1.svg'

const Ourclient = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 8,
        swipeToSlide: true,
        dots: false,
        arrow: false,
    };
    const outClient = [
        {
            id: 1,
            name: 'client 1',
            img: client1
        },
        {
            id: 2,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 3,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 4,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 5,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 6,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 7,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 8,
            name: 'client 1',
            img: client1
        }
        ,
        {
            id: 9,
            name: 'client 1',
            img: client1
        }
    ]
    return (
        <div className='container pt-5'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3 className='doticon mb-4'>Our Clients</h3>
                </div>
                <div className="col-12 mt-3">
                    <Slider {...settings}>
                        {
                            outClient.map((item) => {
                                return (
                                    <div key={item.id}><img src={item.img} alt={item.name} className='ps-2' /></div>
                                )
                            })
                        }
                    </Slider>
                    <div className="col-12 d-flex justify-content-center pt-4">
                        <div className="p-2 fs-custom text-center w-50 rounded-pill text-bg-light elimentor-diver">
                            JOIN THE 5+ COMPANIES TRUSTING ORRITECH
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourclient
