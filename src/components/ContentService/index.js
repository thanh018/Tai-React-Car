import React from 'react';
import uuid from 'uuid/v1';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1 from 'assets/images/services/service-1.png';
import service2 from 'assets/images/services/service-2.png';
import service3 from 'assets/images/services/service-3.png';

class ContentService extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
          ]
      };
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        const { service } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="services-block">
                        <h1 className="title">
                        What we <strong>Offer?</strong></h1>
                        <div className="row">
                            <div className="col-12">
                                <div className="row justify-content-center text-center" data-aos="fade-up">
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
            </React.Fragment>
        )
    }
}


export default ContentService;
