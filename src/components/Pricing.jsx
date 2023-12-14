import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import note from '../images/create-collaborate@1x.jpg'
import note1 from '../images/create-create@1x.jpg'
import note2 from '../images/create-disrupt@1x.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { ZendeskAPI } from '../zendexconfig';

const Pricing = () => {
  const handleZendeskChat = () => {
    ZendeskAPI('webWidget', 'open');
  };
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const images = [
    note,
    note1,
    note2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, Math.floor(Math.random() * 3000) + 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  const customWebsitePackages = [
    // {
    //   title: 'PROMO SHOPIFY PACKAGE',
    //   Original: 'Original price:',
    //   originalPrice: '$398.00',
    //   price: '$ 149.00',
    //   listItem: [

    //     '1 Page Website',
    //     '2 Stock Images',
    //     '1 jQuery Slider Banner',
    //     'Contact/Query Form',
    //     '48 to 72 hours TAT',
    //     'Complete Deployment',
    //     '100% Satisfaction Guarantee',
    //     '100% Unique Design Guarantee',
    //     '100% Money Back Guarantee *',

    //   ]
    // },
    {
      title: 'Promo Package',
      Original: 'Original price:',
      originalPrice: '$198.00',
      price: '$ 99.00',
      listItem: [
        '1 Page Website',
        '2 Stock Images',
        '1 jQuery Slider Banner',
        'Contact/Query Form',
        '48 to 72 hours TAT',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee',
      ]
    },
    {
      title: 'Basic Package',
      Original: 'Original price:',
      originalPrice: '$388.00',
      price: '$ 194.00',
      listItem: [
        '2 Stock Images',
        '3 Page Website',
        '1 jQuery Slider Banner',
        'Contact/Query Form',
        'Complete W3C Certified HTML',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
      ]
    },
    {
      title: 'Startup Package',
      Original: 'Original price:',
      originalPrice: '$788.00',
      price: '$ 394.00',
      listItem: [
        '5 Stock Photos',
        '5 Page Website',
        '3 Banner Design',
        '1 jQuery Slider Banner',
        'FREE Google Friendly Sitemap',
        'Complete W3C Certified HTML',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        'Mobile Responsive will be Additional $200*',
        'CMS will be Additional $250*',

      ]
    },
    {
      title: 'Professional Package',
      Original: 'Original price:',
      originalPrice: '$1,688.00',
      price: '$ 844.00',
      listItem: [
        '10 Unique Pages Website',
        'CMS / Admin Panel Support',
        '8 Stock images',
        '5 Banner Designs',
        '1 jQuery Slider Banner',
        'FREE Google Friendly Sitemap',
        'Complete W3C Certified HTML',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        'Mobile Responsive will be Additional $200*',
      ]
    },
    {
      title: 'Elite Package',
      Original: 'Original price:',
      originalPrice: '$2,988.00',
      price: '$ 1,494.00',
      listItem: [

        'Upto 15 Unique Pages Website',
        'Conceptual and Dynamic Website',
        'Mobile Responsive',
        'Online Reservation/Appointment Tool ',
        'Online Payment Integration ',

        'Custom Forms',
        'Lead Capturing Forms ',
        'Striking Hover Effects',
        'Newsletter Subscription ',
        'Newsfeed Integration',
        'Social Media Integration',
        'Search Engine Submission',
        '5 Stock Photos',
        '3 Unique Banner Design',
        '1 jQuery Slider Banner',
        ' Complete W3C Certified HTML',

        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee'


      ]
    },
    {

      title: 'Corporate Package',
      Original: 'Original price:',
      originalPrice: '$4,788.00',
      price: '$ 2,394.00',
      listItem: [
        '15 to 20 Pages Website',
        'Custom Made, Interactive, Dynamic &amp; High End Design',
        'Custom WP (or) Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Made Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hoover Effects',
        'Content Management System (CMS)',
        'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
        'Online Payment Integration (Optional)',
        'Multi Lingual (Optional)',
        'Custom Dynamic Forms (Optional)',
        'Signup Area (For Newsletters, Offers etc.)',
        'Search Bar',
        'Live Feeds of Social Networks integration (Optional)',
        'Mobile Responsive',
        'FREE 5 Years Domain Name',
        'Free Google Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Industry Specified Team of Expert Designers and Developers',
        'Complete Deployment',
        'Dedicated Accounts Manager',
        '100% Ownership Rights',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarante',
      ]
    },

    // {

    //   title: 'Business Website Package',
    //   Original: 'Original price:',
    //   originalPrice: '$5,998.00',
    //   price: '$ 2,999',
    //   listItem: [
    //     '15 Seconds 2D Explainer Video',
    //     'Voice - Over & Sound Effects',
    //     'Professional Script Writin',
    //     '1 jQuery Slider Banner',
    //     'Up to 10 Custom Made Banner Dsigns',
    //     'Storyboard',
    //     'SEO Meta Tags',
    //     '15 to 20 Pages Website',
    //     'Custom Made, Interactive, Dynamic & High End Design',
    //     'Custom WP (or) Custom PHP Development',
    //     '1 jQuery Slider Banner',
    //     'Up to 10 Custom Made Banner Designs',
    //     '10 Stock Images',
    //     'Unlimited Revisions',
    //     'Special Hoover Effects',
    //     'Content Management System (CMS)',
    //     'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
    //     'Online Payment Integration (Optional)',
    //     'Multi Lingual (Optional)',
    //     'Custom Dynamic Forms (Optional)',
    //     'Signup Area (For Newsletters, Offers etc.)',
    //     'Search Bar',
    //     'Live Feeds of Social Networks integration (Optional)',
    //     'Mobile Responsive',
    //     'FREE 5 Years Domain Name',
    //     'Free Google Friendly Sitemap',
    //     'Search Engine Submission',
    //     'Complete W3C Certified HTML',
    //     'Industry Specified Team of Expert Designers and Developers',
    //     'Complete Deployment',
    //     'Dedicated Accounts Manager',
    //     '100% Ownership Rights',
    //     '100% Satisfaction Guarantee',
    //     '100% Unique Design Guarantee',
    //   ]
    // },


  ]
  const ecommerceWebsitePackages = [
    // {
    //   title: 'PROMO SHOPIFY PACKAGE',
    //   Original: 'Original price:',
    //   originalPrice: '$398.00',
    //   price: '$ 149.00',
    //   listItem: [

    //     'UNLIMITED Logo Design Concepts',
    //     'By 6 Award Winning Designers',
    //     'Icon Design',
    //     'UNLIMITED Revisions',
    //     'Print Media',
    //     'Stationary Design (BusinessCard,Letterhead &amp; Envelope',
    //     'Invoice Design, Email Signature',
    //     'Bi-Fold Brochure (OR) 2 Sided Flyer Design',
    //     'Product Catalog Design',
    //     'Sign age Design (OR) Label Design',
    //     'T-Shirt Design (OR) Car Wrap Design',
    //     'Website',
    //     'E-Commerce Store Design',
    //     'Product Detail Page Design',
    //     'Unique Banner Slider',
    //     'Featured Products Showcase',
    //     'Full Shopping Cart Integration',
    //     'Unlimited Products',
    //     'Unlimited Categories',
    //     'Product Rating &amp; Reviews',
    //     'Easy Product Search',
    //     'Payment Gateway Integration',
    //     'Multi-currency Support',
    //     'Content Management System',
    //     'Cutomer Log-in Area',
    //     'Mobile Responsive',
    //     'Social Media Plugins Integration',
    //     'Coupon Platfom',
    //     'Tell a Friend Feature',
    //     'Social Media Pages',
    //     'Facebook , Twitter, YouTube, Google+ &amp; Pinterest Page Designs',
    //     'Value Added Services',
    //     'Dedicated Account Manager',
    //     'Unlimited Revisions',
    //     'All Final File Formats',
    //     '100% Ownership Rights',
    //     '100% Satisfaction Guarantee',
    //     '100% Unique Design Guarantee',
    //   ]
    // },
    {
      title: 'Startup E-Commerce Package',
      Original: 'Original price:',
      originalPrice: '$1,588.00',
      price: '$ 794.00',
      listItem: [
        'Customized Design',
        'Up-to 100 Products',
        'Content Management System (CMS)',
        'Mini Shopping Cart Integration',
        'Payment Module Integration',
        'Easy Product Search',
        'Dedicated designer & developer',
        'Unlimited Revisions',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
      ]
    },
    {
      title: 'Professional E-Commerce Package',
      Original: 'Original price:',
      originalPrice: '$2,788.00',
      price: '$ 1,394.00',
      listItem: [
        'Customized Design',
        'Up-to 500 Products',
        'Content Management System (CMS)',
        'Full Shopping Cart Integration',
        'Payment Module Integration',
        'Easy Product Search',
        'Product Reviews',
        '5 Promotional Banners',
        'Team of Expert designer & developer',
        'Unlimited Revisions',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',

      ]
    },
    {
      title: 'Elite E-Commerce Package',
      Original: 'Original price:',
      originalPrice: '$7,388.00',
      price: '$ 3,694.00',
      listItem: [

        'UNLIMITED Logo Design Concepts',
        'By 6 Award Winning Designers',
        'Icon Design',
        'UNLIMITED Revisions',
        'Print Media',
        'Stationary Design (BusinessCard,Letterhead &amp; Envelope',
        'Invoice Design, Email Signature',
        'Bi-Fold Brochure (OR) 2 Sided Flyer Design',
        'Product Catalog Design',
        'Sign age Design (OR) Label Design',
        'T-Shirt Design (OR) Car Wrap Design',
        'Website',
        'E-Commerce Store Design',
        'Product Detail Page Design',
        'Unique Banner Slider',
        'Featured Products Showcase',
        'Full Shopping Cart Integration',
        'Unlimited Products',
        'Unlimited Categories',
        'Product Rating &amp; Reviews',
        'Easy Product Search',
        'Payment Gateway Integration',
        'Multi-currency Support',
        'Content Management System',
        'Cutomer Log-in Area',
        'Mobile Responsive',
        'Social Media Plugins Integration',
        'Coupon Platfom',
        'Tell a Friend Feature',
        'Social Media Pages',
        'Facebook , Twitter, YouTube, Google+ &amp; Pinterest Page Designs',
        'Value Added Services',
        'Dedicated Account Manager',
        'Unlimited Revisions',
        'All Final File Formats',
        '100% Ownership Rights',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',


      ]
    },



  ]
  const wordpressWebsitePackages = [
    {
      title: 'Basic Package',
      Original: 'Original price:',
      originalPrice: '$478.00',
      price: '$ 239.00',
      listItem: [
        '3 Page Website',
        '2 Stock Images',
        '1 jQuery Slider Banner',
        'Contact/Query Form',
        '48 to 72 hours TAT',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee *',
      ]
    },
    {
      title: 'Startup Package',
      Original: 'Original price:',
      originalPrice: '$788.00',
      price: '$ 394.00',
      listItem: [
        '5 Page Website',
        '5 Stock Photos',
        '3 Banner Design',
        '1 jQuery Slider Banner',
        'FREE Google Friendly Sitemap',
        'Complete W3C Certified HTML',
        '48 to 72 hours TAT',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee *',
        'Mobile Responsive will be Additional $200*',
        'CMS will be Additional $250*',

      ]
    },
    {
      title: 'Professional Package',
      Original: 'Original price:',
      originalPrice: '$1,388.00',
      price: '$ 694.00',
      listItem: [
        '10 Unique Pages Website',
        'CMS / Admin Panel Support',
        '8 Stock images',
        '5 Banner Designs',
        'Mobile Responsive',
        '1 jQuery Slider Banner',
        'FREE Google Friendly Sitemap',
        'Complete W3C Certified HTML',
        '48 to 72 hours TAT',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee *',
      ]
    },

    {
      title: 'Elite Package',
      Original: 'Original price:',
      originalPrice: '$2,498.00',
      price: '$ 1249.00',
      listItem: [
        'Upto 15 Unique Pages Website',
        'Conceptual and Dynamic Website',
        'Mobile Responsive',
        'Online Reservation/Appointment Tool ',
        'Online Payment Integration ',
        'Custom Forms',
        'Lead Capturing Forms ',
        'Striking Hover Effects',
        'Newsfeed Integration',
        'Social Media Integration',
        'Search Engine Submission',
        '5 Stock Photos',
        '3 Unique Banner Design',
        '1 jQuery Slider Banner',
        ' Complete W3C Certified HTML',
        '48 to 72 hours TAT',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee ',


      ]
    },
    {
      title: 'Corporate Package',
      Original: 'Original price:',
      originalPrice: '$3,988.00',
      price: '$ 1994.00',
      listItem: [
        '15 to 20 Pages Website',
        'Custom Made, Interactive, Dynamic &amp; High End Design',
        'Custom WP (or) Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Made Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hoover Effects',
        'Content Management System ',
        'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
        'Online Payment Integration (Optional)',
        'Multi Lingual (Optional)',
        'Custom Dynamic Forms (Optional)',
        'Signup Area (For Newsletters, Offers etc.)',
        'Search Bar',
        'Live Feeds of Social Networks integration (Optional)',
        'Mobile Responsive',
        'FREE 5 Years Domain Name',
        'Free Google Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Industry Specified Team of Expert Designers and Developers',
        'Complete Deployment',
        'Dedicated Accounts Manager',
        '100% Ownership Rights',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee *',
      ]
    },
    {
      title: 'Business Package',
      Original: 'Original price:',
      originalPrice: '$6,588.00',
      price: '$ 3,294.00',
      listItem: [
        '15 to 20 Pages Website',
        '15 Seconds 2D Explainer Video',
        'Voice - Over &amp; Sound Effects',
        'Professional Script Writing',
        'Storyboard',
        'SEO Meta Tags',
        'Custom Made, Interactive, Dynamic &amp; High End Design',
        'Custom WP (or) Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Made Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hoover Effects',
        'Content Management System ',
        'Online Appointment/Scheduling/Online Ordering Integration',
        'Online Payment Integration',
        'Multi Lingual',
        'Custom Dynamic Forms',
        'Signup Area',
        'Search Bar',
        'Live Feeds of Social Networks integration',
        'Mobile Responsive',
        'FREE 5 Years Domain Name',
        'Free Google Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Industry Specified Team of Expert Designers and Developers',
        'Complete Deployment',
        'Dedicated Accounts Manager',
        '100% Ownership Rights',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        '100% Money Back Guarantee ',


      ]
    },


  ]
  const mobileAppPackages = [
    {
      title: 'Automated/Interactive E-Commerce Package',
      Original: 'Original price:',
      originalPrice: '$15999.00',
      price: '$ 7,999.00',
      listItem: [

        'Unlimited Page Website',
        'Custom Content Management System(CMS)',
        'Unique Pages and UI Design',
        'Complete Custom Development',
        'Process Automation Tools',
        'Newsfeed Integration',
        'Social Media Plugins Integration',
        'Upto 40 Stock images',
        '10 Unique Banner Designs',
        'JQuery Slider',
        'Search Engine Submission',
        'Free Google Friendly Sitemap',
        'FREE 5 Years Hosting',
        'Custom Email Addresses',
        'Social Media Page Designs(Facebook, Twitter, Instagram)',
        'Complete W3C Certified HTML',
        'Complete Deployment',
        '100 % Satisfaction Guarantee',
        '100 % Unique Design Guarantee',
        'Money Back Guarantee',
        'Automated Inventory / Shipping / Supplier',
        'Manage thousands to millions of inventory with ease and check stock levels in real - time.Receive low inventory notifications and generate purchase orders to replenish your stock.',
        'Suppliers Integration(API NEEDED)',
        'Shipper Integration(API NEEDED)',
        'Order management',
        'LOT numbers and expire date tracking',
        'Transfer stock between warehouses(If Warehouse - API NEEDED)',
        'Receive stock into a specific warehouse(If Warehouse - API NEEDED)',
        'Fulfill orders from a particular warehouse(If Warehouse - API NEEDED)',
        'Stock Management',
        'Actionable Insights',
        'Real - Time Visibility',
        'Inventory Opportunities',
        'Advanced Features: (API Needed For Suppliers / Warehouse',
        'Speak to suppliers during trivial conversations.',
        'Set and send actions to suppliers regarding governance and compliance',
        'materials.',
        'Place purchasing requests.',
        'Research and answer internal questions regarding procurement functionalities or a supplier / supplier set.',
        'Receiving / filing / documentation of invoices and payments / order requests',
        'Machine Learning(ML) for Supply Chain Planning(SCP)',
        'Machine Learning for Warehouse Management',
        'Natural Language Processing(NLP) for Data Cleansing and Building DatRobustness',
        'Automated Invoices & amp; Estimates',
        'Create beautiful, professional invoices & amp; estimates in just a few secondanthen instantly email them as PDF\'s directly to your customers or prospects.',
        'Automated Split invoicing',
        'Automated Combine invoices',
        'Invoice templates',
        'Automated Barcode Scanning',
        'Scan inventory into your orders, generate barcodes for your documents, and',
        'search for inventory or documents by scanning barcodes.',
        'Locations and Zones',
        'Have multiple warehouses, offices, or retail stores ? No problem.Easily track where all your inventory is by organizing everything into locations and zones.',
        'Organize inventory items using custom attributes such as size, color, and, location.View how many you have globally or at each,location.',
        'Customer Accounts',
        'Performance and analytics',
        'Customization of Personal Details',
        'Process management',
        'Sales Automation',
        'Team Collaboration',
        'Marketing Automation',
        'Security',
        'Integrations',
        'Mobile Notifications',
        'Sales Reports',
        'Trend Analytics',
        'Forecasting',
        'Territory Management',
        'Account Management',
        'Event Integration',
        'Advanced Data Security',
        'Purchase Orders',
        'With integrated purchase orders, you can easily replenish your inventory',
        'levels',
        'by ordering more stock and even track when those new items will arrive.',
        'Partial orders fulfill',
        'Backordering',
        'Financial Reports',
        'Generate extremely detailed reports for your inventory, sales and services.',
        'Filter your reports by date - range and category to see what\'s making you the,most money',

      ]
    },
    {
      title: 'Automated/Interactive Conferencing Portal Package',
      Original: 'Original price:',
      originalPrice: '$9,999.00',
      price: '$ 4,999.00',
      listItem: [
        'Unlimited Page Website',
        'Custom Content Management System (CMS)',
        'Unique Pages and UI Design',
        'Complete Custom Development',
        'Process Automation Tools',
        'Newsfeed Integration',
        'Social Media Plugins Integration',
        'Upto 40 Stock images',
        '10 Unique Banner Designs',
        'JQuery Slider',
        'Search Engine Submission',
        'Free Google Friendly Sitemap',
        'FREE 5 Years Hosting',
        'Custom Email Addresses',
        'Social Media Page Designs (Facebook, Twitter, Instagram)',
        'Complete W3C Certified HTML',
        'Complete Deployment',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
        'Money Back Guarantee',
        'Key features',
        'Automated Course Creation',
        'Video Conferencing',
        'Skills/Certification Tracking',
        'Mobile Learning',
        'Asynchronous Learning',
        'CRM Features',
        'Gamification',
        'Social Learning/Message Boards',
        'Motivational Triggers',
        'Forums And Webinars',
        'E-commerce And Subscriptions',
        'Online Course Booking',
        'Excellent Reporting',
        'Invoicing Integration',
        'Financial Integrations',
        'Student Information management',
        'Automated communications',
        'Learning Management System',
        'Quick And Easy Course Scheduling',
        'Reporting And Data Analysis',
        'Assessment Management &amp; Live Feedback',
        'Gradebooks',
        'Quick User Integration',
        'Easy Payment Methods',
        'Online Communities &amp; Social Engagement',
        'Curation of Resources And Adding Own Resources',

      ]
    },


    {
      title: 'Business Web-Apps Package',
      Original: 'Original price:',
      originalPrice: '$4,999.00',
      price: '$ 2,499.00',
      listItem: [

        '15 to 20 Pages Website',
        'Custom Made, Interactive, Dynamic &amp; High End Design',
        'Custom WP (or) Custom PHP Development',
        '1 jQuery Slider Banner',
        'Up to 10 Custom Made Banner Designs',
        '10 Stock Images',
        'Unlimited Revisions',
        'Special Hoover Effects',
        'Content Management System (CMS)',
        'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
        'Online Payment Integration (Optional)',
        'Multi Lingual (Optional)',
        'Custom Dynamic Forms (Optional)',
        'Signup Area (For Newsletters, Offers etc.)',
        'Search Bar',
        'Live Feeds of Social Networks integration (Optional)',
        'Mobile Responsive',
        '15 Seconds 2D Explainer Video',
        'Voice - Over &amp; Sound Effects',
        'Professional Script Writing',
        'Storyboard',
        'SEO Meta Tags',
        'FREE 5 Years Domain Name',
        'Free Google Friendly Sitemap',
        'Search Engine Submission',
        'Complete W3C Certified HTML',
        'Industry Specified Team of Expert Designers and Developers',
        'Complete Deployment',
        'Dedicated Accounts Manager',
        '100% Ownership Rights',
        '100% Satisfaction Guarantee',
        '100% Unique Design Guarantee',
      ]
    },
  ]
  const serviceSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin: 10,
    slideTransition: 'linear',
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    // rtl: true,
    loop: true,
    slidesToShow: 3, // Adjust the number of slides to show as needed
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Adjust for medium-sized screens
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1, // Adjust for medium-sized screens
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2, // Adjust for medium-sized screens
        },
      },
    ],
  };

  return (
    <div>
      <section className='pricing-page'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${images[backgroundImageIndex]})`,
          transition: 'background-image 1s ease-in-out',
          position: 'relative',
        }}>
        <div className="opacity">
          <div className="container-fluid">
            <div className="row pb-5 align-items-center justify-content-center">
              <div class="pro-heading-1"><h2>OUR COMPETITIVE PACKAGES</h2>
                <p>With our custom website design packages, you can accomplish customized excellence which aims to exceed your digital goals and improve your online presence.</p>

              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex reo justify-content-center align-items-start">
                  <div className="nav flex-column main-host nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                      Cutom Websites
                    </button>
                    <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                      Wordpress
                    </button>

                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                      E-Commerce
                    </button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                      Apps
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="tab-content" id="v-pills-tabContent">

                  <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="container p-0">
                      <div className="slider-wrapper" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
                        <div id="service-slider" className="owl-theme owl-carousel">
                          <Slider {...serviceSliderSettings}>
                            {customWebsitePackages.map((pkg, ind) => (
                              <div key={ind} className="item">
                                <div className={`slide-item ${ind === 0 ? 'promo' : '' }`}>
                                  <div className="main-custom-cards">
                                    <div className="main-oral">
                                      <h2>{pkg.title}</h2>
                                      <h6>{pkg.Original}<span>{pkg.originalPrice}</span></h6>
                                      <h3>{pkg.price}</h3>
                                    </div>
                                    <ul className="main-li">
                                      {pkg.listItem.map((list, index) => {
                                        return <li key={index}>{list}</li>
                                      })}
                                    </ul>

                                    <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='loop-2'>order now</a>
                                    <div className="order-now">
                                      <button className='commercial-rollup' onClick={handleZendeskChat}>Live Chat</button>
                                      <a href="tel:510-474-0516">510-474-0516</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="container ">
                      <div className="row justify-content-between">
                        <div className="col-12">
                          <div className="slider-wrapper" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
                            <div id="service-slider" className="owl-theme owl-carousel">
                              <Slider {...serviceSliderSettings}>
                                {wordpressWebsitePackages.map((pkg, ind) => (
                                  <div key={ind} className="item">
                                    <div className="slide-item">
                                      <div className="main-custom-cards">
                                        <div className="main-oral">
                                          <h2>{pkg.title}</h2>
                                          <h6>{pkg.Original}<span>{pkg.originalPrice}</span></h6>
                                          <h3>{pkg.price}</h3>
                                        </div>
                                        <ul className="main-li">
                                          {pkg.listItem.map((list, index) => {
                                            return <li key={index}>{list}</li>
                                          })}
                                        </ul>
                                        {/* <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='loop-1'>view more</a> */}
                                        <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='loop-2'>order now</a>
                                        <div className="order-now">
                                          <button className='commercial-rollup' onClick={handleZendeskChat}>Live Chat</button>                                          <a href="tel:510-474-0516">510-474-0516</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="container p-0">
                      <div className="slider-wrapper" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
                        <div id="service-slider" className="owl-theme owl-carousel">
                          <Slider {...serviceSliderSettings}>
                            {ecommerceWebsitePackages.map((pkg, ind) => (
                              <div key={ind} className="item">
                                <div className="slide-item">
                                  <div className="main-custom-cards">
                                    <div className="main-oral">
                                      <h2>{pkg.title}</h2>
                                      <h6>{pkg.Original}<span>{pkg.originalPrice}</span></h6>
                                      <h3>{pkg.price}</h3>
                                    </div>
                                    <ul className="main-li">
                                      {pkg.listItem.map((list, index) => {
                                        return <li key={index}>{list}</li>
                                      })}
                                    </ul>

                                    <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='loop-2'>order now</a>
                                    <div className="order-now">
                                      <button className='commercial-rollup' onClick={handleZendeskChat}>Live Chat</button>                                      <a href="tel:510-474-0516">510-474-0516</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="container p-0">
                      <div className="slider-wrapper" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="0" data-aos-offset="0">
                        <div id="service-slider" className="owl-theme owl-carousel">
                          <Slider {...serviceSliderSettings}>
                            {mobileAppPackages.map((pkg, ind) => (
                              <div key={ind} className="item">
                                <div className="slide-item">
                                  <div className="main-custom-cards">
                                    <div className="main-oral">
                                      <h2>{pkg.title}</h2>
                                      <h6>{pkg.Original}<span>{pkg.originalPrice}</span></h6>
                                      <h3>{pkg.price}</h3>
                                    </div>
                                    <ul className="main-li">
                                      {pkg.listItem.map((list, index) => {
                                        return <li key={index}>{list}</li>
                                      })}
                                    </ul>

                                    <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='loop-2'>order now</a>
                                    <div className="order-now">
                                      <button className='commercial-rollup' onClick={handleZendeskChat}>Live Chat</button>                                    
                                        <a href="tel:510-474-0516">510-474-0516</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="main-button">
              <a className='frist-btn' data-bs-toggle="modal" href="#exampleModalToggle" role="button" >
                Connect with Us <FontAwesomeIcon className="roter-w1" icon={faArrowRight} />
              </a>
              <a className='second-btn' href="tel:510-474-0516" >
                510-474-0516<FontAwesomeIcon className='roter-w2' icon={faPhone} shake />
              </a>


            </div>          </div>
        </div>

      </section>
    </div>
  );
};

export default Pricing;
