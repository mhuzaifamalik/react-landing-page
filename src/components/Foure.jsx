import React from 'react'
import remote from '../images/icon-smb.svg'
import remote1 from '../images/icon-e-commerece.svg'
import remote2 from '../images/icon-education.svg'
import remote3 from '../images/icon-startups.svg'
import romort4 from '../images/icon-non-profit.svg'
import romert5 from '../images/icon-high-risk.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { ZendeskAPI } from '../zendexconfig';

function Foure() {
    const handleZendeskChat = () => {
        ZendeskAPI('webWidget', 'open');
      };
    return (
        <div>
            <section className='foure'>
                <div className="container">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="col-12 col-md-5">
                            <div className="row align-items-center ">
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={remote} class="img-fluid" alt="img" />
                                        <h3>Small businesses</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={remote1} class="img-fluid" alt="img" />
                                        <h3>E-commerce
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={remote3} class="img-fluid" alt="img" />
                                        <h3>Startups
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={romort4} class="img-fluid" alt="img" />
                                        <h3>Non-profits</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={remote2} class="img-fluid" alt="img" />
                                        <h3>Education</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="four-wrap">
                                        <img src={romert5} class="img-fluid" alt="img" />
                                        <h3>High Risk (MJ)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 pl-5">
                            <div className="four-content">
                                <h2>For simple Custom website design and Development, you're in good hands</h2>
                                <p>You can rely on us for streamlined custom website development. Because of our expertise, the process is simple and efficient, and you'll receive a website that is perfect for your needs.</p>
                           <div className="main-button">
                            <button className='frist-btn' data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                            Explore Now <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
                            </button>
                            <button className='second-btn' onClick={handleZendeskChat}> 
                            Talk To Us <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
                            </button>
                       
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Foure
