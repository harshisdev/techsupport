import React, { useState } from 'react'; // Added useState
import bgImage from '../assets/images/tech-man.webp';
import TechnologyConsultingIcon from '../assets/images/technology-consulting.png';
import ItSupportIcon from '../assets/images/it-support.png';
import ItManagementIcon from '../assets/images/it-management.png';
import ServerCloudSupportIcon from '../assets/images/server-cloud-support.png';
import TechnologyConsultingIcon1 from '../assets/images/technology-consulting-1.png';
import ItSupportIcon1 from '../assets/images/it-management-1.png';
import ItManagementIcon1 from '../assets/images/it-management-1.png';
import ServerCloudSupportIcon1 from '../assets/images/server-cloud-support-1.png';
import TechnologyConsultingImg from '../assets/images/TechnologyConsultingImg.png';
import ItSupportImg from '../assets/images/ItSupportImg.png';
import ItManagementImg from '../assets/images/ItManagement.png';
import ServerCloudSupportImg from '../assets/images/ServerCloudSupport.png';

const Techservices = () => {
    const techServciesData = [
        {
            id: 1,
            title: 'Technology Consulting',
            description: 'Expertise in IT consultancy for many companies, for their different working areas.',
            icon: TechnologyConsultingIcon,
            bgimage: TechnologyConsultingImg,
            defaultIcon: TechnologyConsultingIcon,
            hoverIcon: TechnologyConsultingIcon1, // Hover image
            animation: 'fade-right'
        },
        {
            id: 2,
            title: 'IT Support',
            description: 'Expertise in IT consultancy for many companies, for their different working areas.',
            icon: ItSupportIcon,
            bgimage: ItSupportImg,
            defaultIcon: ItSupportIcon,
            hoverIcon: ItSupportIcon1, // Hover image
            animation: 'zoom-in'
        },
        {
            id: 3,
            title: 'IT Management',
            description: 'Expertise in IT consultancy for many companies, for their different working areas.',
            icon: ItManagementIcon,
            bgimage: ItManagementImg,
            defaultIcon: ItManagementIcon,
            hoverIcon: ItManagementIcon1, // Hover image
            animation: 'zoom-in'
        },
        {
            id: 4,
            title: 'Server & Cloud Support',
            description: 'Expertise in IT consultancy for many companies, for their different working areas.',
            icon: ServerCloudSupportIcon,
            bgimage: ServerCloudSupportImg,
            defaultIcon: ServerCloudSupportIcon,
            hoverIcon: ServerCloudSupportIcon1, // Hover image
            animation: 'fade-left'
        }
    ];

    // State to track hover
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="container py-5 techservices overflow-hidden">
            <div className="row">
                {techServciesData.map((item) => {
                    const isHovered = hoveredCard === item.id;
                    return (
                        <div className="col-3" key={item.id}>
                            <div
                                className="card"
                                data-aos={item.animation}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="px-3 pt-3 position-relative">
                                    <img
                                        src={isHovered ? item.hoverIcon : item.defaultIcon}
                                        style={{ width: '60px', height: '60px' }}
                                        className="card-img-top position-relative z-3"
                                        alt={item.title}
                                    />
                                    <div className="imgroundlap"></div>
                                </div>
                                <div
                                    className="imagoverlap"
                                    style={{ backgroundImage: `url(${item.bgimage})` }}
                                ></div>
                                <div className="card-body pt-5 position-relative">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text py-3">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Techservices;
