import React from 'react';
import Slider from "react-slick";
import uuid from 'uuid/v1';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from 'assets/images/banner/banner-9.png';
import icon1 from 'assets/images/icon-block/icon-1.png';
import icon2 from 'assets/images/icon-block/icon-2.png';
import icon3 from 'assets/images/icon-block/icon-3.png';
import icon4 from 'assets/images/icon-block/icon-4.png';
import service1 from 'assets/images/services/service-1.png';
import service2 from 'assets/images/services/service-2.png';
import service3 from 'assets/images/services/service-3.png';
import ImageGray from 'assets/images/image-block/image-gray.png';
import Example from 'assets/images/tint-block/tint-2.png';

class ContentLanding extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        feature: [
            {
                id: 1,
                src: icon1,
                title: 'SAFETY',
                description: 'OQEO’s priority is to ensure safety for all women when traveling, cis and trans women. Not only for the riders but also for the women that are behind the wheel..'
            },
            {
                id: 2,
                src: icon2,
                title: 'COMMUNITY',
                description: 'Our service is created to further help community by giving back to charities and non-profits that promote female empowerment and stop violence against women.'
            },
            {
                id: 3,
                src: icon3,
                title: 'HONEST PRICING',
                description: 'At OQEO, we believe your safety is priceless. We keep our fares simple and affordable and we promise you’ll never have to worry about surge pricing.'
            },
            {
                id: 4,
                src: icon4,
                title: 'EMPOWERMENT',
                description: 'In Malaysia, taxi driving is a male-dominated occupation. OQEO is changing that by empowering women to get behind the wheel.'
            }
        ],
        service: [
            {
              id: 1,
              src: service1,
              title: 'Kid Pick-Up'
            },
            {
              id: 2,
              src: service2,
              title: 'Shopping Whisper'
          },{
              id: 3,
              src: service3,
              title: 'Tolong Mama'
          }
        ],
        news: [
            {
                id: 1,
                src: Example,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…'
            },
            {
                id: 2,
                src: Example,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…'
            },
            {
                id: 3,
                src: Example,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…'
            },
            {
                id: 4,
                src: Example,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…'
            },
            {
                id: 5,
                src: Example,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…'
            }
        ],
        quotes: [
            {
                id: 1,
                title: 'What people are talking about us',
                text: 'Hey! really excited to use your service. thanks for coming to Malaysia',
                position: 'Anita (18, Student)'
            },
            {
                id: 1,
                title: 'Please note, we conduct thorough',
                text: 'Hey! really excited to use your service. thanks for coming to Malaysia',
                position: 'Anita (18, Student)'
            },
            {
                id: 1,
                title: 'Hey! really excited to use your service',
                text: 'Hey! really excited to use your service. thanks for coming to Malaysia',
                position: 'Anita (18, Student)'
            },
            {
                id: 1,
                title: 'Please note, we conduct thorough',
                text: 'Hey! really excited to use your service. thanks for coming to Malaysia',
                position: 'Anita (18, Student)'
            }
        ]
      };
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          var settings1 = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
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
          var settings2 = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: false,
                      dots: true
                    }
                  }
              ]
          };
          var settings3 = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: false,
                      dots: true
                    }
                  }
              ]
          };
          const { service, feature, news, quotes } = this.state;
        return (
            <React.Fragment>
                <div className="container" data-aos="fade-up">
                    <div className="describe-block text-center" >
                        <h1 className="describe-title"><span>Ride</span> with us</h1>
                        <div className="describe-text">OQEO is a ridesharing App and community designed to empower and provide a safe space for women and people who identify as women through transportation, technology and lifestyle.</div>
                    </div>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="icon-block">
                        <div className="col-12">
                            <Slider {...settings2} className="row justify-content-center text-center">
                                {
                                    feature.map(item => (
                                        <div key={uuid()} className="col-12 col-sm-12 col-md-12 mb-5 mb-md-0 icon-item">
                                            <img className="attachment-full size-full image-icon-block" src={item.src} alt="" />
                                            <h4 className="text-primary my-4 icon-block-title text-uppercase">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="col-12 text-center icon_action"><a className="btn btn-primary" href="/f">LEARN MORE</a></div>
                    </div>
                </div>
                <section className="download_app text-white aos-init aos-animate bg-purple" data-aos="fade-up" data-slick-block>
                    <div className="container">
                        <div className="row download-inner">
                            <div className="col-12 col-md-6 col-sm-12 download-left">
                                <h1 className="main-title">Download <span className="font-bold">OQEO App</span></h1>
                                <div className="app-conntent">
                                    <p className="text-1">From <span className="font-bold">HER </span>to <span className="font-bold">HER</span></p>
                                    <p className="text-2">Women deserve to be safe</p>
                                </div>
                                <ul className="app_links d-flex align-items-center justify-content-between d-desktop">
                                    <li className="app_link">
                                        <a href="https://itunes.apple.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/2000px-Download_on_the_App_Store_Badge.svg_-300x89.png" alt="" sizes="(max-width: 300px) 100vw, 300px" /></a>
                                    </li>
                                    <li className="app_link">
                                        <a href="https://play.google.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/google-play-badge-e1535519906376-300x89.png" alt="" sizes="(max-width: 300px) 100vw, 300px" /></a>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings3} className="col-12 col-md-6 col-sm-12 download-right" data-slick-block-inner>
                                    <div className="image-item image-item-1"><img src={ImageGray} alt=""/></div>
                                    <div className="image-item image-item-2"><img src={ImageGray} alt=""/></div>
                                    <div className="image-item image-item-3"><img src={ImageGray} alt=""/></div>
                            </Slider>
                            <ul className="app_linkss d-mobile">
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
                <div className="banner-block small" data-aos="fade-up">
                    <div className="block-image">
                        <img src={banner} alt="#" />
                    </div>
                    <div className="banner-overlay"></div>
                    <div className="banner-content text-center">
                        <h1 className="banner-title">Become a Driver</h1>
                        <p className="banner-text"></p>
                    </div>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="describe-block text-center">
                        <h1 className="describe-title"><span>Drive</span> with us</h1>
                        <div className="describe-text">** Please note, we conduct thorough driving and criminal background checks on all our drivers **</div>
                    </div>
                    <div className="quote-block slick-common">
                        <Slider {...settings} >
                            {
                                quotes.map(item => (
                                    <div key={uuid()} className="describe-block text-center">
                                        <h1 className="describe-title">{item.title}</h1>
                                        <div className="describe-text">{item.text}
                                            <br></br>
                                            <br></br> — {item.position} </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="icon-block" data-slick-block>
                        <div className="col-12">
                            <Slider {...settings2} className="row justify-content-center text-center">
                                {
                                    feature.map(item => (
                                        <div key={uuid()} className="col-12 col-sm-12 col-md-12 mb-5 mb-md-0 icon-item">
                                            <img className="attachment-full size-full image-icon-block" src={item.src} alt="" />
                                            <h4 className="text-primary my-4 icon-block-title text-uppercase">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="col-12 text-center icon_action"><a className="btn btn-primary" href="/l">LEARN MORE</a></div>
                    </div>
                </div>
                <div className="services-block" data-aos="fade-up">
                    <div className="container">
                        <h1 className="title">SERVICES</h1>
                        <div className="row">
                            <div className="col-12">
                                <div className="row justify-content-center text-center">
                                {
                                        service.map(item => (
                                            <div key={uuid()}className="col-12 col-sm-12 col-md-4">
                                                <div className="item-service">
                                                    <img className="attachment-full size-full image-icon-block" src={item.src} alt="" />
                                                    <h4 className="text-primary my-4 icon-block-title">{item.title}</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="newsletter text-white bg-purple aos-init aos-animate" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 intro_text">
                                <h1 className="main-title">Sign up to our monthly newsletter</h1>
                                <p>Get discounts, empowerment event invites, features about extraordinary women and much, much more.</p>
                                <div className="wpcf7" id="wpcf7-f408-o1" role="form" lang="en-US" dir="ltr">
                                    <form className="wpcf7-form mailchimp-ext-0.4.51" action="/#wpcf7-f408-o1" method="post" novalidate="novalidate">
                                        <div className="row mt-5">
                                            <div className="col-12 col-md-6 mb-3 mb--md-0"><span className="wpcf7-form-control-wrap your-name">
                                                <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" type="text" name="your-name" value="" size="40" aria-required="true" aria-invalid="false" placeholder="First and Last Name" /></span>
                                            </div>
                                            <div className="col-12 col-md-6 mb-3 mb--md-0"><span className="wpcf7-form-control-wrap your-email">
                                                <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" type="text" name="your-email" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Email Address" /></span>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <input className="wpcf7-form-control wpcf7-submit btn" type="submit" value="SUBSCRIBE" />
                                        </div>
                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                        <p >
                                            <span className="wpcf7-form-control-wrap referer-page">
                                            <input className="wpcf7-form-control wpcf7-text referer-page" type="hidden" name="referer-page" value="direct visit" aria-invalid="false" /></span></p>
                                    </form>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container" data-aos="fade-up">
                    <div className="tint-block slick-common">
                        <h1 className="main-title text-center"> <span className="font-bold">OQEO </span>in the news</h1>
                        <div className="tint-inner" data-tint-block>
                            <Slider {...settings1} >
                                {
                                    news.map((item,index) => (
                                        <div key={uuid()} className="tint-item">
                                            <div className="tint-item-inner"><img className="attachment-full size-full image-tint-block" src={item.src} alt="" />
                                                <p className="color-pink">{index + 1} {item.title} </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="col-12 text-center icon_action"><a className="btn btn-primary" href="/h">LEARN MORE</a></div>
                </div>

            </React.Fragment>
        )
    }
}


export default ContentLanding;
