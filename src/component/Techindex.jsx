import React from 'react'
import technologyIndeximg from '../assets/images/technologyIndeximg.png'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineQuickreply } from 'react-icons/md'
const Techindex = () => {
    const tecIndex = [
        {
            id: 1,
            title: 'Technology Consulting',
            percentage: '80%'
        },
        {
            id: 2,
            title: 'IT Support',
            percentage: '50%'
        },
        {
            id: 3,
            title: 'IT Management',
            percentage: '60%'
        },
        {
            id: 4,
            title: 'IT Security',
            percentage: '95%'
        }
    ]
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3 data-aos="zoom-in" className='doticon mb-4'>Technology Index</h3>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6 d-flex align-items-center">
                    <img data-aos="fade-right" style={{ width: '100%', height: "auto", borderRadius: '10px' }} src={technologyIndeximg} alt="Technology Index" />
                </div>
                <div className="col-6 align-items-center d-flex">
                    <div data-aos="fade-left">
                        <h2 className='fs-4 mb-4'>We Are Always Best For Technology Solution</h2>
                        <div className='wearealways'>
                            <div className='rounded text-bg-light me-3 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                                <GrUserExpert className='fs-3' />
                            </div>
                            <div>
                                <h2 className='fs-5'>Experience</h2>
                                <p>We gives you bests service to your project.</p>
                            </div>
                        </div>
                        <div className='wearealways my-4'>
                            <div className='rounded text-bg-light me-3 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
                                <MdOutlineQuickreply className='fs-3' />
                            </div>
                            <div>
                                <h2 className='fs-5'>Quick Support</h2>
                                <p>We Always Here at your support and help.</p>
                            </div>
                        </div>
                        {
                            tecIndex.map((item) => {
                                return (
                                    <div data-aos="zoom-in" key={item.id}>
                                        <label className='fw-bold'>{item.title}</label>
                                        <div className='progressbar my-3' datalabel={item.percentage}>
                                            <span style={{ width: item.percentage }}></span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <p className='mb-0'>
                            We help businesses achieve strategic technology transformation, minimising the totality of their end-to-end business risk and maximising the business value of their IT infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techindex
