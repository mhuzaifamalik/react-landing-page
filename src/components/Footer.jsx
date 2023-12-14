import React, { useState } from 'react'
import m65 from '../images/logo-color.png'
import m66 from '../images/Layer771.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import mire from '../images/black-background-with.avif'

import file from '../images/auto-pop.png'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';



function Footer() {
  // const navigate = useNavigate()
  const [inputVal, setInputVal] = useState({
    First_Name: '',
    Email: '',
    Phone: '',
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
    console.log("formRes", formRes)
    const formData = await formRes.json()
    console.log("formData", formData)
    // navigate('/thank-you')
    window.location.href = '/custom-website-development/thankyou'
  }
  return (
    <>
      <footer>
        <section class="main-rivasfooter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-12">
                <div class="f-3 folp">
                  <h3>COMPANY</h3>
                 
                 
                  <ul>
                    <li><FontAwesomeIcon className='finalize' icon={faPhone} /><a href="tel:510-474-0516">510-474-0516</a></li>
                    <li><FontAwesomeIcon className='finalize' icon={faEnvelope} /><a href="mailto:info@webversestudios.com">info@webversestudios.com</a></li>
                    <li><FontAwesomeIcon className='finalize' icon={faLocationDot} /><a href="https://goo.gl/maps/CZyLV1vUq9HErFdg6">315 Montgomery Street Financial
                                    District, 9th and 10th Floor, San Francisco, CA, 94104</a></li>
                  </ul>
                  <ul>
                    <li><a href="https://webversestudios.com/privacy-policy.php" rel="noreferrer" target='_blank'>Privacy Policy</a></li>
                    <li><a href="https://webversestudios.com/terms-and-condition.php" rel="noreferrer" target='_blank'>Terms & Condition</a></li>

                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="f-1">
                  <a href="/home/">  <img src={m65} className='img-fluid' alt="" /></a>
                  <p>Web Verse Studios is the best design company that you can come across for online business and eCommerce services.</p>

                </div>
              </div>




              <div class="col-lg-4 col-12">
                <div class="f-3">
                  <h3>Follow Us</h3>
                  <ul className='romorter'>
                    <li><a href="https://www.linkedin.com/company/webverse-studios"><FontAwesomeIcon className='iconic' icon={faLinkedinIn} /></a></li>
                    <li><a href="https://www.facebook.com/webversestudios" ><FontAwesomeIcon className='iconic' icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/webversestudios/"><FontAwesomeIcon className='iconic' icon={faInstagram} /></a></li>

                    {/* <ul>
                    <li><FontAwesomeIcon className='finalize' icon={faPhone} /><a href="tel:510-474-0516">510-474-0516</a></li>
                    <li><FontAwesomeIcon className='finalize' icon={faEnvelope} /><a href="mailto:info@webversestudios.com">info@webversestudios.com</a></li>
                    <li><FontAwesomeIcon className='finalize' icon={faLocationDot} /><a href="https://goo.gl/maps/CZyLV1vUq9HErFdg6">315 Montgomery Street Financial
                                    District, 9th and 10th Floor, San Francisco, CA, 94104</a></li>
                  </ul> */}
                  </ul>
               
                </div>
            
              </div>


            </div>
          </div>
          <div className="main-hosting">
            <ul>
            <li><p>© 2023 Web Verse Studios | All rights reserved.</p></li>
            <li><img className='img-fluid' src={m66} alt="" /></li>
            </ul>
          </div>
        </section>
      </footer>

      <div class="modal morethen fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog invoke1 modal-dialog-centered">
          <div class="modal-content">




            <div class="modal-body">
              <div className="main-popup">

                <div className="container">
                  <div className="row g-0 align-items-center">
                    <div className="col-12 col-md-6 panel">
                      <div className="pop-imgaes">
                        <img src={file} alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 panel">

                      <div className="popup-right ">
                        <button type="button" className='invoerter' data-bs-dismiss="modal" aria-label="Close">
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <h5>Limited Time Offer</h5>
                        <h3>Get <span>50%</span> Discount</h3>
                        <form onSubmit={handleSubmit} >
                          <div className="input-field">
                            <input name="Name" required type="text" placeholder="Enter Name" onChange={handleChange} />
                          </div>
                          <div className="input-field">
                            <input name="Email" required type="email" placeholder="Enter Email" onChange={handleChange} />
                          </div>
                          <div className="input-field">
                            <input name="Phone" required type="tel" placeholder="Enter Phone" onChange={handleChange} />
                          </div>
                          <div className="input-field">
                            <textarea name="Message" required placeholder="Tell us about your project" onChange={handleChange} ></textarea>
                          </div>
                          <div className="input-field">
                            <button type="submit">Request a Quote</button>
                          </div>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
