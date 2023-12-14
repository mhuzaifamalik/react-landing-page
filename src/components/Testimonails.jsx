import React from 'react'
import loop from '../images/loop1.png'

function Testimonails() {
    return (
        <div>
            <section className="miantest">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="main-test">
                                <h2 className='aspects-9651'> Frequently Asked Questions</h2>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="tester">
                                    <img src={loop} className='img-fluid' alt="img" />
                                </div>
                            </div>
                        <div className="col-12 col-md-8">
                          
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How long does it take to develop a custom website?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                           <p>Timelines vary based on complexity, features, and client feedback. Typically, our process takes a few weeks to a few months.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What input do I have in the design process?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Your input is crucial. We involve you in consultations, design reviews, and feedback sessions to ensure the website aligns with your vision.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can you optimize my website for search engines?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                          <p>Absolutely. We integrate SEO best practices during development to enhance your site's visibility and improve its ranking on search engines.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfoure">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefoure" aria-expanded="false" aria-controls="collapsefoure">
                                        Do you provide ongoing support after the website is live?
                                        </button>
                                    </h2>
                                    <div id="collapsefoure" class="accordion-collapse collapse" aria-labelledby="headingfoure" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Yes, we offer post-launch support. Whether it's troubleshooting, updates, or additional features, we're here to ensure your website remains optimal and up-to-date.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonails
