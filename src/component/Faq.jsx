import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
    return (
        <div className='container pt-4 pb-5'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h3 data-aos="zoom-in" className='doticon mb-4'>Frequently Asked Question</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h4 className='fs-6 mb-3'>Have any Question to our team?</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>1. What papers needed for software development?</Accordion.Header>
                            <Accordion.Body>
                                If you are looking to lose weight, maintain healthy weight or gain lean muscle mass, our Certified Sports Nutritionist will create a personalized nutrition plan to help you achieve your goals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2. What is the budget limit for a new project?</Accordion.Header>
                            <Accordion.Body>
                                If you are looking to lose weight, maintain healthy weight or gain lean muscle mass, our Certified Sports Nutritionist will create a personalized nutrition plan to help you achieve your goals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>3. How to contact the development team?</Accordion.Header>
                            <Accordion.Body>
                                If you are looking to lose weight, maintain healthy weight or gain lean muscle mass, our Certified Sports Nutritionist will create a personalized nutrition plan to help you achieve your goals.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>4. How to contact the development team?</Accordion.Header>
                            <Accordion.Body>
                                If you are looking to lose weight, maintain healthy weight or gain lean muscle mass, our Certified Sports Nutritionist will create a personalized nutrition plan to help you achieve your goals.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq
