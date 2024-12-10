import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Our IT Services Group</title>
      </Helmet>
      <Navbar activeSection='about' />
      <div className="container custom-padding">
        <div className="row">
          <div className="col-12">
            <h6>About Our IT Services Group</h6>
            <p>
              Our IT Services Group is a team of dedicated professionals with extensive experience in providing cutting-edge technology solutions to businesses of all sizes. With a strong track record of success spanning over 3+ years, we specialize in delivering high-quality IT services across various industries, helping organizations drive innovation, improve efficiency, and achieve their strategic objectives.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
