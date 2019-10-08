import React from 'react';
import uuid from 'uuid/v1';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import imageGray from 'assets/images/image-block/image-gray.png';

class ContentRide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          ride: [
              {
                  id: 1,
                  src: imageGray,
                  title: 'SIGN UP / SIGN IN',
                  description: 'Whatever need arises, our priority is to help you arrive safely, comfortably and in style. Sign up to ride with us.'
              },
              {
                id: 2,
                src: imageGray,
                title: 'REQUEST A RIDE',
                description: 'Get picked up by one of our screened and reliable drivers whose priority is to get you to your destination safely.'
            },
            {
                id: 3,
                src: imageGray,
                title: 'ARRIVE SAFELY',
                description: 'When the ride ends, pay and rate your driver through the app. Refer your friends to enjoy your next ride on us.'
            },
            {
                id: 4,
                src: imageGray,
                title: 'GAIN POINTS',
                description: 'Ride with us and gain redeemable points to exchange many wonderful rewards and discounts from OQEO.'
            }
          ],
          video: 'https://www.youtube.com/embed/DIFUyNlxOus?feature=oembed'
      };
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        const { ride, video } = this.state;
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                  }
                }
              ]
          };
        return (
            <React.Fragment>
                <div className="container">
                    <div className="image-block">
                        <div className="col-12">
                            <Slider {...settings} className="row justify-content-center text-center image-block-inner">
                                    {
                                        ride.map(item => (
                                            <div key={uuid()} className="col-12 col-sm-12 col-md-12 mb-5 mb-md-0 image-item">
                                                <img className="attachment-full size-full" src={imageGray} alt="" />
                                                <h4 className="text-primary my-4 image-block-title text-uppercase font-bold">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        ))
                                    }
                            </Slider>
                        </div>
                    </div>
                    <section className="download_app text-white aos-init aos-animate bg-white" data-aos="fade-up">
                        <div className="container">
                            <div className="row download-inner">
                                <div className="download-left">
                                    <h1 className="main-title">Download <span className="font-bold">OQEO App</span></h1>
                                    <div className="download-wrapper">
                                        <div className="app-conntent">
                                            <p className="text-1">From <span className="font-bold">HER </span>to <span className="font-bold">HER</span></p>
                                            <p className="text-2">Women deserve to be safe</p>
                                        </div>
                                        <ul className="app_links d-flex align-items-center justify-content-between d-desktop">
                                            <li className="app_link">
                                                <a href="https://itunes.apple.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/2000px-Download_on_the_App_Store_Badge.svg_-300x89.png" alt=""  sizes="(max-width: 300px) 100vw, 300px" /></a>
                                            </li>
                                            <li className="app_link">
                                                <a href="https://play.google.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/google-play-badge-e1535519906376-300x89.png" alt=""  sizes="(max-width: 300px) 100vw, 300px" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="app_linkss d-mobile" data-aos="fade-up">
                                    <li className="app_link">
                                        <a href="https://itunes.apple.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/2000px-Download_on_the_App_Store_Badge.svg_-300x89.png" alt=""  sizes="(max-width: 300px) 100vw, 300px" /></a>
                                    </li>
                                    <li className="app_link">
                                        <a href="https://play.google.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/google-play-badge-e1535519906376-300x89.png" alt=""  sizes="(max-width: 300px) 100vw, 300px" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="embed-container" data-aos="fade-up">
                        <iframe width="640" height="360" title="myFrame" src={video} frameborde="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                    <div className="contact-block">
                        <p className="text-center">If you have any questions about OQEO, please contact us at <span className="color-pink font-bold">support@oqeo.com</span></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ContentRide;
