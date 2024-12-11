import React from 'react'
// import Icon1 from '../assets/images/image.png'
import bgImage from '../assets/images/tech-man.webp';
import TechnologyConsultingIcon from '../assets/images/technology-consulting.png';
import ItSupportIcon from '../assets/images/it-support.png';
import ItManagementIcon from '../assets/images/it-management.png';
import ServerCloudSupportIcon from '../assets/images/server-cloud-support.png';
import TechnologyConsultingImg from '../assets/images/TechnologyConsultingImg.png';
import ItSupportImg from '../assets/images/ItSupportImg.png';
import ItManagementImg from '../assets/images/ItManagement.png';
import ServerCloudSupportImg from '../assets/images/ServerCloudSupport.png';

const Techservices = () => {
    const techServciesData = [
        {
            id: 1,
            title: 'Technology Consulting',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: TechnologyConsultingIcon,
            bgimage: TechnologyConsultingImg,
            animation: 'fade-right'
        },
        {
            id: 2,
            title: 'IT Support',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: ItSupportIcon,
            bgimage: ItSupportImg,
            animation: 'zoom-in'
        },
        {
            id: 3,
            title: 'IT Management',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: ItManagementIcon,
            bgimage: ItManagementImg,
            animation: 'zoom-in'
        },
        {
            id: 4,
            title: 'Server & Cloud Support',
            description: 'Expertise in a IT consultancy for the many companies, for their different working areas.',
            icon: ServerCloudSupportIcon,
            bgimage: ServerCloudSupportImg,
            animation: 'fade-left'
        }
    ]
    return (
        <>
            <div className="container py-5 techservices overflow-hidden">
                <div className="row">
                    {
                        techServciesData.map((item) => {
                            return (
                                <div className="col-3" key={item.id}>
                                    <div className="card" data-aos={item.animation}>
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
