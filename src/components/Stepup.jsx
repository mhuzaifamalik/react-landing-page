import React, { useEffect, useRef } from 'react'
import backdoor from '../images/blur.avif'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Stepup() {
  const shadeImage = useRef();

  useEffect(() => {
    gsap.fromTo(
      shadeImage.current,
      {
        scale: 0.1,
        x: '0%'
        // autoAlpha: 0, // If you want to control opacity
      },
      {
        scale: 1,
        x: '0%',
        // autoAlpha: 1, // If you want to control opacity
        scrollTrigger: {
          trigger: shadeImage.current,
          id: 'scrollingAnimation',
          scrub: true,
          start: 'top 100%',
          // markers: true, // for debugging
          end: 'bottom 0%',
        },
      }
    );
  }, []);

  return (
    <div>
      <section className='step-4' style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="row g-3 romp justify-content-space">
            <div>
            <img id="scollingAnimation" ref={shadeImage} src={backdoor} className="img-fluid bg-shade" alt="img" />
            </div>
            <div className="col-12 col-lg-12 ">
              <div className="step-banner-text">
                <h2>Grow Your Brand with Our Unique Approach to Developing Custom Websites.
                </h2>
                <p className='theme-p'>Your Vision, Our Knowledge of Developing Custom Websites</p>
              </div>
            </div>

            <div className="row  justify-content-center">
              <div className="col-12 col-md-6">
                <div className="custom-laps">
                  <p>"We create custom websites tailored to your business's unique needs, ensuring a distinctive online presence that stands out."</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="custom-laps">
                  <p>"Implement strategic digital transformation to propel your business forward by integrating advanced technologies."</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-md-6">
                <div className="custom-laps">
                  <p>"Our SEO-centric approach ensures online success by maximizing visibility and organic traffic to your website."</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="custom-laps">
                  <p>"Experience a collaborative partnership with transparent communication, ensuring your vision is surpassed through iterative enhancement."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Stepup
