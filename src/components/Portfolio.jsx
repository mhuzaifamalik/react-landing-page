import React, {useEffect } from 'react';
import remort from '../images/logotabs.png';
import { Fancybox } from "@fancyapps/ui";
import remort25 from '../images/1-min.png';
import troter from '../images/t-2.png'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import morely from '../images/1-t-min.png';
import r1 from '../images/2.png'
import top from '../images/pop1.png'
import top1 from '../images/t-1151.jpg'
import top2 from '../images/4-min.png'
import top3 from '../images/4-t-min.png'
import m3 from '../images/8-t-min.png'
import m4 from '../images/8-min.png'
import m5 from '../images/m-7.jpg'
import m6 from '../images/mt-2.jpg'
import m7 from '../images/mk.jpg'
import m8 from '../images/mk-1.png'
import m9 from '../images/9mm.png'
import m10 from '../images/9-t-min.png'
import m11 from '../images/3-t-min.png'
import m12 from '../images/3-min.png'
import m13 from '../images/1-f.png'
import m14 from '../images/mki.png'
import m15 from '../images/kli.png'
import m16 from '../images/uiy.png'
import m17 from '../images/mbm.png'
import m18 from '../images/fuya.png'
import m19 from '../images/poi.png'
import m20 from '../images/4-f.png'
import m21 from '../images/5.png'
import m22 from '../images/5-f.png'
import m23 from '../images/6-f.png'
import m24 from '../images/6.png'
import m25 from '../images/t-3.png'
import m26 from '../images/4.png'
import m27 from '../images/tr-1.png'
import m28 from '../images/tr-45.png'
import m29 from '../images/12-min.png'
import m30 from '../images/12-t-min.png'
import m31 from '../images/13-t-min.png'
import m32 from '../images/13-min.png'
import m33 from '../images/mock-1.png'
import m34 from '../images/mock-2.png'
import m35 from '../images/revert-1.png'
import m36 from '../images/revert-2.png'
import m37 from '../images/10-t-min.png'
import m38 from '../images/10-min.png'
import m40 from '../images/11-t-min.png'
import m39 from '../images/11-min.png'
import m85 from '../images/beleco2.webp'
import m86 from '../images/inbbb.png'
import m87 from '../images/screenshot.webp'
import m88 from '../images/word-1.png'
import m91 from '../images/scentina2.webp'
import m92 from '../images/screencapture-.png'
import m93 from '../images/screenshot1.webp'
import m94 from '../images/screencapture-organicthemes.png'
import m95 from '../images/bricksy-screenshot-1.webp'
import m96 from '../images/screencapture-demo-anarieldesign-bricksy-travel-2023-10-25-22_30_49.png'
import m97 from '../images/screenshot8.webp'
import m98 from '../images/screencapture-858.png'
import m99 from '../images/epentatonic-woo.webp'
import m100 from '../images/screencapture-fse-.png'
import m1 from '../images/imgpsh_fullsize_anim85.png'
import m2 from '../images/imgpsh_fullsize_anim858.png'
import m398 from '../images/l1.png'
import m392 from '../images/l1c.png'
import m498 from '../images/l-2.png'
import m492 from '../images/l-2c.png'
import m598 from '../images/l-3.png'
import m592 from '../images/l-3c.png'
import m698 from '../images/l-4.png'
import m692 from '../images/l-4c.png'
import m792 from '../images/l-5c.png'
import m798 from '../images/l-5.png'
import m892 from '../images/l6.png'
import m898 from '../images/l6c.png'
import m998 from '../images/l-9c.png'
import m992 from '../images/l-9.png'
import m1098 from '../images/l11.png'
import m1092 from '../images/l11c.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { ZendeskAPI } from '../zendexconfig';

function Portfolio() {
    const handleZendeskChat = () => {
        ZendeskAPI('webWidget', 'open');
      };

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        });
    }, []);
    
   
    return (
        <div>
            <section className='custom-portfolio'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="pro-heading">
                                <h6>Featured Projects</h6>
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="pro-text">
                                <p>We develop and build wonderful experiences that captivate audiences and promote continuous engagement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-md-12">
                            <div className="tabs">
                                <div className="logo-tabs" >
                                    <img className="mockup" src={remort} alt="" />
                                </div>
                                <ul className="nav nav-pills inert mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active yout" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><span class="remort">Web Design & Development
                                        </span></button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link yout" id="pills-wordpress-tab" data-bs-toggle="pill" data-bs-target="#pills-wordpress" type="button" role="tab" aria-controls="pills-wordpress" aria-selected="false"><span class="remort">Wordpress</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link yout" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span class="remort">E-Commerce</span></button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link yout" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span class="remort">Mobile Apps</span></button>
                                    </li>
                                 
                                   
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="container">
                                        <div className="row pt-4 justify-content-between">
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={remort25} data-fancybox="gallery" >
                                                        <img src={morely} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={r1} data-fancybox="gallery" >
                                                        <img src={troter} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={top1} data-fancybox="gallery" >
                                                        <img src={top} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row pt-4 justify-content-between">
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={top2} data-fancybox="gallery" >
                                                        <img src={top3} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m4} data-fancybox="gallery" >
                                                        <img src={m3} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    
                                                    <a href={m5} data-fancybox="gallery" >
                                                        <img src={m6} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row pt-4 justify-content-between">
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m7} data-fancybox="gallery" >
                                                        <img src={m8} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m9} data-fancybox="gallery" >
                                                        <img src={m10} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m12} data-fancybox="gallery" >
                                                        <img src={m11} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row pt-4 justify-content-between">
                                        <div className="col-12 col-md-4">
                                            <div className="invoke">
                                                <a href={m13} data-fancybox="gallery" >
                                                    <img src={m14} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="invoke">
                                                <a href={m16} data-fancybox="gallery" >
                                                    <img src={m15} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="invoke">
                                                <a href={m18} data-fancybox="gallery" >
                                                    <img src={m17} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="row pt-4 justify-content-between">
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m20} data-fancybox="gallery" >
                                                        <img src={m19} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m22} data-fancybox="gallery" >
                                                        <img src={m21} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="invoke">
                                                    <a href={m23} data-fancybox="gallery" >
                                                        <img src={m24} className="img-fluid" alt="Image1" />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">  <div className="row pt-4 justify-content-between">
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m26} data-fancybox="gallery" >
                                                <img src={m25} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m27} data-fancybox="gallery" >
                                                <img src={m28} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m29} data-fancybox="gallery" >
                                                <img src={m30} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m32} data-fancybox="gallery" >
                                                <img src={m31} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                    <div className="row pt-4 justify-content-between">
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m33} data-fancybox="gallery" >
                                                    <img src={m34} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m36} data-fancybox="gallery" >
                                                    <img src={m35} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m38} data-fancybox="gallery" >
                                                    <img src={m37} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m39} data-fancybox="gallery" >
                                                    <img src={m40} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-4 justify-content-between">
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m798} data-fancybox="gallery" >
                                                    <img src={m792} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m892} data-fancybox="gallery" >
                                                    <img src={m898} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m992} data-fancybox="gallery" >
                                                    <img src={m998} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m1098} data-fancybox="gallery" >
                                                    <img src={m1092} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="pills-wordpress" role="tabpanel" aria-labelledby="pills-wordpress-tab">  <div className="row pt-4 justify-content-between">
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m86} data-fancybox="gallery" >
                                                <img src={m85} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m88} data-fancybox="gallery" >
                                                <img src={m87} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m92} data-fancybox="gallery" >
                                                <img src={m91} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="invoke">
                                            <a href={m94} data-fancybox="gallery" >
                                                <img src={m93} className="img-fluid" alt="Image1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                    <div className="row pt-4 justify-content-between">
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m96} data-fancybox="gallery" >
                                                    <img src={m95} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m98} data-fancybox="gallery" >
                                                    <img src={m97} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m100} data-fancybox="gallery" >
                                                    <img src={m99} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m2} data-fancybox="gallery" >
                                                    <img src={m1} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                       
                                    </div>

                                    <div className="row pt-4 justify-content-between">
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m398} data-fancybox="gallery" >
                                                    <img src={m392} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m498} data-fancybox="gallery" >
                                                    <img src={m492} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m598} data-fancybox="gallery" >
                                                    <img src={m592} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="invoke">
                                                <a href={m698} data-fancybox="gallery" >
                                                    <img src={m692} className="img-fluid" alt="Image1" />
                                                </a>
                                            </div>
                                        </div>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-button expire-button">
              <button href='/' className='frist-btn' onClick={handleZendeskChat}  >
                Connect with Us <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
              </button>
              <a className='second-btn' href="tel:510-474-0516" >
                510-474-0516<FontAwesomeIcon className='roter-w2' icon={faPhone} shake />
              </a>


            </div> 

                </div>
            </section>
        </div>
    );
}

export default Portfolio;
