import React from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import icon5 from 'assets/images/icon-block/icon-5.png';
import icon6 from 'assets/images/icon-block/icon-6.png';
import icon7 from 'assets/images/icon-block/icon-7.png';
import icon8 from 'assets/images/icon-block/icon-8.png';

class ContentDrive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          drive: [
              {
                  id: 1,
                  title: 'INSTALL DRIVER APP',
                  src: icon5,
                  description: "Click",
                  link: {
                      text: "Register Here",
                      url: '#'
                  },
                  description1: 'You can also register by clicking the button below.'
              },
              {
                id: 2,
                title: 'SUBMIT DOCUMENTS',
                src: icon6,
                description: "Your application will be reviewed for approval. Required: Driver's License, Identification, Safety Certificate, Insurance,…",
                link: '',
                description1: ''
            },
            {
                id: 3,
                title: 'BACKGROUND CHECK',
                src: icon7,
                description: "You will receive a link for a background check in a follow up email.",
                link: '',
                description1: ''
            },
            {
                id: 4,
                title: 'COMPLETE',
                src: icon8,
                description: "Once your account is approved and activated, complete your OQEO profile.",
                link: '',
                description1: ''
            }
          ]
      };
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        const { drive } = this.state;
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
                    <div className="describe-block text-center" data-aos="fade-up">
                        <h1 className="describe-title">How its <span>Works</span>?</h1>
                        <div className="describe-text">Become part of our community of women helping women by signing up to drive for OQEO. ?By becoming a driver, you not only give yourself the freedom to work the hours that suit you, but you provide a safe and stress-free journey for women to enjoy.</div>
                    </div>
                    <div className="describe-block text-center describe-block-v2" ata-aos="fade-up">
                        <h1 className="describe-title">Why <span>Join</span> Us?</h1>
                        <div className="describe-text">Be part of the movement, help provide alternative and safe rides for women. Just like you, all riders are women who put safety first. When you drive with us, you help HER get anywhere, anytime. Besides a safe ride from point A to B, OQEO empowers other women to get behind the wheel. If that’s not enough, be your own boss, make extra income. You’ve got the freedom and flexibility to drive with OQEO.</div>
                    </div>
                    <div className="icon-block" data-slick-block data-aos="fade-up">
                        <div className="col-12">
                            <Slider {...settings} className="row justify-content-center text-center" >
                                {
                                    drive.map((item, index) => (
                                        <div className="col-12 col-sm-12 col-md-12 mb-5 mb-md-0 icon-item" key={index}>
                                            <img className="attachment-full size-full image-icon-block" src={item.src} alt="" />
                                            <h4 className="text-primary my-4 icon-block-title text-uppercase font-bold">{index + 1}. {item.title}</h4>
                                            <p>{item.description}
                                                {
                                                    Object.keys(item.link).length > 0 && (
                                                        <a href={Object.values(item.link)[1]} className="font-bold"> "{Object.values(item.link)[0]}".</a> 
                                                    )
                                                }
                                                {item.description1}
                                            </p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ContentDrive;
