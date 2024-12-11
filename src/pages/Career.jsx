import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Career at IT Services Group</title>
      </Helmet>
      <Navbar activeSection='career' />
      <div className="banner-career">
        <h1 data-aos="zoom-in">Career</h1>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <h1 className='fs-5 mb-0 text-center'>We are Hiring
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Career
