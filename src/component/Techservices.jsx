import React from 'react'
import Icon1 from '../assets/images/image.png'
import bgImage from '../assets/images/tech-man.webp'

const Techservices = () => {
    const techServciesData = [
        {
            id: 1,
            title: 'Technology Consulting',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: Icon1,
            bgimage: bgImage
        },
        {
            id: 2,
            title: 'IT Support',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: Icon1,
            bgimage: bgImage
        },
        {
            id: 3,
            title: 'IT Management',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: Icon1,
            bgimage: bgImage
        },
        {
            id: 4,
            title: 'IT Security',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: Icon1,
            bgimage: bgImage
        }
    ]
    return (
        <>
            <div className="container py-5 techservices">
                <div className="row">
                    {
                        techServciesData.map((item) => {
                            return (
                                <div className="col-3" key={item.id}>
                                    <div className="card">
                                        <div className='px-3 pt-3 position-relative'>
                                            <img src={item.icon} style={{ width: '60px', height: '60px' }} className="card-img-top position-relative z-3" alt="Technology Consulting" />
                                            <div className='imgroundlap' ></div>
                                        </div>
                                        <div className='imagoverlap' style={{ backgroundImage: `url(${item.bgimage})` }} ></div>
                                        <div className="card-body pt-5 position-relative">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text py-3">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Techservices
