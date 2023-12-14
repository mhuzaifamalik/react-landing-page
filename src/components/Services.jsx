import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ZendeskAPI } from '../zendexconfig';
import { Link } from 'react-router-dom';


function Services() {
    const handleZendeskChat = () => {
        ZendeskAPI('webWidget', 'open');
      };
    return (
        <div>
            <section className="doing">
                <div className="container-fluid">
                    <div className="row justify-content-end align-items-center no-gutters">
                        <div className="col-12 col-md-5">
                            <div className="doing-text">
                                <h2>
                                    What can we help you with?
                                </h2>
                                <p>We provide our clients with the business, technical, and creative talent they need to succeed, whether they are Fortune 500 businesses or startups in stealth mode.

                                </p>
                            </div>
                            <div className="main-button">
                            <a className='frist-btn' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                            Get Started <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
                            </a>
                            <button className='second-btn teching' onClick={handleZendeskChat}> 
                            lets Start Chat  <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
                            </button>
                           </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <Link to='/custom-website-development' className="custom-box r-1">
                                <div className="custom-text">
                                    <h3>01<FontAwesomeIcon className="rock" icon={faArrowRight} /> </h3>
                                </div>
                                <div className="redalter">
                                    <h3>Web Design & Development</h3>
                                </div>
                            </Link>
                            <Link to='/custom-website-development'  className="custom-box r-2">
                                <div className="custom-text">
                                    <h3>02<FontAwesomeIcon className="rock" icon={faArrowRight} /> </h3>
                                </div>
                                <div className="redalter">
                                    <h3>Web Application Development</h3>
                                </div>
                            </Link>
                            <Link to='/custom-website-development'  className="custom-box r-3">                                
                                <div className="custom-text">
                                    <h3>03<FontAwesomeIcon className="rock" icon={faArrowRight} /> </h3>
                                </div>
                                <div className="redalter">
                                    <h3>Mobile App Development</h3>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
