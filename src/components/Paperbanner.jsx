import React from 'react'
import paper1 from '../images/paper-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faPhone} from '@fortawesome/free-solid-svg-icons'

function Paperbanner() {
    return (
        <div>
            <section className="paper-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="session">
                                <h6>About WebVerse Studios</h6>
                                <h2>Your Partner for Transparent, Visionary Web Solutions
                                </h2>
                                <p>At Webverse, we use custom website development and design to redefine digital excellence. We create distinctive online identities with a passion for innovation, each one customized to meet the particular needs of our clients. Your website will be both visually appealing and resilient thanks to the strategic approach we take and the integration of cutting-edge technologies. We optimize visibility and organic traffic for online success, focusing on SEO and a transparent, cooperative process to enhance your idea into a digital masterpiece.
                                    </p>                                
                                <ul>
                                    <li>
                                        <a class="quote" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Request A Quote <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />  </a>
                                      
                                    </li>
                                    <li>  <a class="call-quote" href="tel:510-474-0516">510-474-0516 <FontAwesomeIcon className='roter-w2' icon={faPhone} shake /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="session-img">
                                <img className='img-fluid' src={paper1} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Paperbanner
