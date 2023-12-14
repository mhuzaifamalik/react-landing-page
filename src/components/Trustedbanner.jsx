import Slider from "react-slick";

import slider1 from '../images/1.webp';
import slider2 from '../images/2.webp';
import slider3 from '../images/3.webp';
import slider4 from '../images/4.webp';
import slider6 from '../images/6.webp';
import slider7 from '../images/7.webp';
import slider8 from '../images/8.webp';

const Trustedbanner = () => {
  // const [autoplaySpeed, setAutoplaySpeed] = useState(2000);

  const serviceSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideTransition: 'linear',
    autoplay: true,
    autoplaySpeed:2000,
    arrows: false,
  
    rtl: true,
    loop:true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          margin:10
        
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
  };

  // useEffect(() => {
  //   console.log("useEffect is running");
  //   // After a 1000ms delay, change the autoplay speed to 6000ms
  //   // const delay = setTimeout(() => {
  //   //   setAutoplaySpeed(6000);
  //   // }, 1000);

  //   // return () => clearTimeout(delay); // Clear the timeout to avoid memory leaks
  // }, []);

  return (
    <section className="home-services">
    <p class="theme-p">Denver Business Journal's Top Web Development Company 11 years straight

</p>
      <div className="container p-0">
        <div className="slider-wrapper" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
          <div id="service-slider" className="owl-theme owl-carousel">
            <Slider {...serviceSliderSettings}>
              {[slider1, slider2, slider3, slider4, slider6, slider7, slider8, slider4].map((sliderImage, index) => (
                <div key={index} className="item">
                  <div className="slide-item">
                    <div className="slide-img">
                      <img className="img-fluid" src={sliderImage} alt={`service item ${index + 1}`} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trustedbanner;
