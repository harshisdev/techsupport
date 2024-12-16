import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Helmet } from 'react-helmet';
import { toast, ToastContainer } from 'react-toastify';
import hiringImg from '../assets/images/hiring-img.jpg';
import Marquee from '../component/Marquee';
import { BeatLoader } from 'react-spinners';

const Career = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false)

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(uploadedFile.type)) {
        toast.error('Only PDF, DOC, or DOCX files are allowed');
      } else if (uploadedFile.size > 2 * 1024 * 1024) {
        toast.error('File size should not exceed 2MB');
      } else {
        setFile(uploadedFile);
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = () => {
    if (!firstName.trim()) {
      toast.error('Please enter your first name');
    }
    else if (!lastName.trim()) {
      toast.error('Please enter your last name');
    } else if (!email.trim()) {
      toast.error('Please enter your email');
    } else if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
    } else if (!phone.trim()) {
      toast.error('Please enter your mobile number');
    } else if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      toast.error('Mobile number must be exactly 10 digits');
    } else if (!message.trim()) {
      toast.error('Please enter your message');
    } else if (!file) {
      toast.error('Please upload a file');
    }
    else {
      setLoader(true)
      setTimeout(() => {
        toast.success('Form submitted successfully');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFile(null);
        setLoader(false)
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 1500);
    }
  };


  return (
    <>
      <Helmet>
        <title>Career at IT Services Group</title>
      </Helmet>
      <Navbar activeSection="career" />
      <div className="banner-career">
        <h1 data-aos="zoom-in">Career</h1>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <h2 className="fs-5 mb-0 text-center">We are Hiring</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <img style={{ width: "100%", height: 'auto' }} className='rounded' src={hiringImg} alt="We are Hiring" />
          </div>
          <div className="col-md-6">
            <Marquee text="Looking For Sales Marketing, Edu:- MBA" />
            <h3 className="fs-6 mb-3 fw-normal">Drop Your Details</h3>
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="input-form">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control"
                      id="firstName"
                      autoComplete="off"
                    />
                    <label htmlFor="firstName" className={`form-label ${firstName ? 'form-label-selected' : ''}`}>
                      First Name <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-form">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control"
                      id="lastName"
                      autoComplete="off"
                    />
                    <label htmlFor="lastName" className={`form-label ${lastName ? 'form-label-selected' : ''}`}>
                      Last Name <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="input-form">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="email"
                      autoComplete="off"
                    />
                    <label htmlFor="email" className={`form-label ${email ? 'form-label-selected' : ''}`}>
                      Email <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="input-form">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setPhone(value);
                        }
                      }}
                      className="form-control"
                      id="phone"
                      autoComplete="off"
                      maxLength={10}
                      pattern='0-9'
                    />
                    <label htmlFor="phone" className={`form-label ${phone ? 'form-label-selected' : ''}`}>
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="input-form">
                    <textarea
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      id="message"
                      autoComplete="off"
                    />
                    <label htmlFor="message" className={`form-label ${message ? 'form-label-selected' : ''}`}>
                      Message <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="input-form">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="form-control"
                      id="file"
                      accept=".pdf,.doc,.docx"
                    />
                    <label htmlFor="file" className="form-label form-label-selected">
                      Upload Your CV <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div style={{ fontSize: '0.65rem' }} className='mt-2 fst-italic text-danger'>
                    File size should not exceed 2MB & Only PDF, DOC, or DOCX files are allowed
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`btn btn-outline-primary rounded-pill px-3 ${loader == true ? 'd-flex align-items-center' : ''}`}
                >
                  Submit {loader ? <BeatLoader className='ms-1' size="8" speedMultiplier="0.5" color="#0d6efd" /> : null}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Career;
