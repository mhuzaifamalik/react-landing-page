import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone,faHeadset } from '@fortawesome/free-solid-svg-icons';
import { ZendeskAPI } from '../zendexconfig';

import '../App.css';

const Form = () => {
  const handleZendeskChat = () => {
    ZendeskAPI('webWidget', 'open');
  };
  const [inputVal, setInputVal] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Phone: '',
    Budget: '',
    Services: '',
    Message: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputVal({ ...inputVal, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formRes = await fetch('https://webversestudios.com/mail/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type based on your API's requirements
      },
      body: JSON.stringify(inputVal), // Convert the data to JSON format
    })
    console.log("formRes",formRes)
    const formData = await formRes.json()
    console.log("formData",formData)
    window.location.href = '/custom-website-development/thankyou '
  }
  return (
    <div>
      <section className="form">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-12">
              <div className="main-hosted">
                <div className="aungler">
                  <h3>Book Your Free Expert Consultation Now!</h3>
                </div>
                <p className='theme-cutom-p'>Book your place now for a free consultation with an expert! Together, we will explore your requirements and develop a customized solution.</p>
                <form className="cmxform" onSubmit={handleSubmit}>
                  <div className="row justify-content-center g-4">
                    <div className="col-lg-5 col-12">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="form-field" >
                            <input name="First_Name" type="text" placeholder='First Name' onChange={handleChange} required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-field" >
                            <input name="Last_Name" type="text" placeholder='Last Name' onChange={handleChange} required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-field" >
                            <input name="Email" type="email" placeholder='Email' onChange={handleChange} required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-field" >
                            <input name="Phone" type="text" placeholder='Phone' onChange={handleChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-12">
                      <div className="row g-4">
                        <div className="col-lg-6 col-12">
                    
                          <div className="form-field">
                          <select name="Budget" id="budget" placeholder='Select Budget' onChange={handleChange} required>
                            <option value="" selected disabled>Select Budget</option>
                            <option value="$100">$100</option>
                            <option value="$200">$200</option>
                            <option value="$300">$300</option>
                            <option value="$400">$400</option>
                            <option value="$500">$500</option>
                          </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                       
                          <div className="form-field">
                          <select name="Services" className="valid safari_only" aria-invalid="false" onChange={handleChange} required >
                            <option value="" selected disabled>Select Service</option>
                            <option value="Custom Website">Custom Website</option>
                            <option value="E-commerce Solutions">E-commerce Solutions</option>
                            <option value="Logo And Brand Design">Logo And Brand Design</option>
                            <option value="Web App Development">Web App Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Video Animation">Video Animation</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                          </select>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-field">
                          <textarea name="Message" placeholder="Anything you wanna add" onChange={handleChange} required></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <button className="btn-submit" type='submit'>Submit Now</button>
                    </div>
                    <div className="because">
                      <span>Or contact us using other ways</span>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                    <div className="infocontact">
                    
                        <ul>
                          <li><span>Hire Us</span></li>
                          <li>
                          <FontAwesomeIcon className="penblue" icon={faHeadset} /><button  onClick={handleZendeskChat}>Live Chat</button>
                          </li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                    <div className="infocontact">
                  
                        <ul>
                          <li><span>Email</span></li>
                          <li>
                          <FontAwesomeIcon className="penblue" icon={faEnvelope} /><a href="mailto:info@webversestudios.com">info@webversestudios.com</a>
                          </li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                    <div className="infocontact">
                 
                        <ul>
                          <li><span>Phone</span></li>
                          <li>
                          <FontAwesomeIcon className="penblue" icon={faPhone} /><a href="tel:510-474-0516">510-474-0516</a>
                          </li>
                          </ul>
                      </div>
                    </div>
                    </div>


                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;