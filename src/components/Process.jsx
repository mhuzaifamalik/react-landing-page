import React from 'react'
import video from '../images/galaxy-stone.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Process() {
    return (
        <div>
            <section className="process">
                <video loop="ture" autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="container">
                    <div className="row pt-5 justify-content-between align-items-center">
                        <div className="col-12 col-md-4">
                            <div className="main-text-process">
                                <h6>
                                    Our Process
                                </h6>
                                <h2>WebVerse Studios
                                    <span> Five-Step</span> Custom Website
                                    Process</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="process-p">
                                <p>Any project's progress depends on the process used to carry it out. Consistent outcomes, quality, and business expansion follow from a consistent process. Although each project we work on has a distinct conclusion, we constantly stick to the same process to ensure the best possible results. When you work with Iceberg, we will walk you through the entire process of developing a Custom Website or optimizing your website, providing you with clarification at every step.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5 justify-content-between">
                        <div className="col-12 col-md-5">
                            <div className="custom-mater">
                                <div className="content">
                                <h4>Discovery and Consultation</h4>
                                <p>We begin by understanding your vision and goals. Through in-depth consultations, we gather insights to shape a strategy that aligns with your brand identity and objectives.</p>
                                </div>
                                <FontAwesomeIcon className='trof' icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="custom-mater">
                            <div className="content">
                            <h4>Strategic Planning</h4>
                                <p>Our team develops a comprehensive plan, outlining the design, functionality, and technology needed to bring your vision to life.</p>
                                </div>
                                
                                <FontAwesomeIcon className='trof' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-12 align-items-center">
                        <div className="col-12 col-md-4">
                            <div className="process-p">
                                <p>Start a smooth digital shift by following the five steps provided by WebVerse Studios. Strategic planning and client collaboration are given top priority in our methodical process, which spans from discovery to launch.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="custom-mater">
                            <div className="content">
                            <h4>Creative Design & Development</h4>
                                <p>With a strategic roadmap in place, our designers and developers collaborate to create a visually stunning and high-performing website. </p>
                                </div>
                               
                                <FontAwesomeIcon className='trof' icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="process-p">
                                <p>At WebVerse Studios, our custom website design and development process is a journey tailored to your unique vision. From strategic planning and creative design to rigorous testing, every step is infused with expertise. </p>
                            </div>
                        </div>

                    </div>
                    <div className="row pt-5 pb-5 justify-content-between">
                        <div className="col-12 col-md-5">
                            <div className="custom-mater">
                            <div className="content">
                            <h4>Testing & Quality Assurance</h4>
                                <p>We perform rigorous testing to ensure your website functions flawlessly, covering performance and cross-browser compatibility for a polished, reliable product.</p>
                                </div>
                              
                                <FontAwesomeIcon className='trof' icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="custom-mater">
                            <div className="content">
                            <h4>Launch & Ongoing Support: </h4>
                                <p>Our website launch is precise, and we offer ongoing support to meet post-launch requirements and adapt to the evolving online landscape.</p>
                                </div>
                              
                                
                                <FontAwesomeIcon className='trof' icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Process