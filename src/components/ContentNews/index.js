import React from 'react';
import uuid from 'uuid/v1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import imageNew from 'assets/images/news/banner-6.png';

class ContentNews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          news: [
              {
                id: 1,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
              },
              {
                id: 2,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },
            {
                id: 3,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 4,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 5,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 6,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 7,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 8,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 9,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 10,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 11,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            },{
                id: 12,
                src: imageNew,
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est justo, aliquam et ullamcorper quis…',
                description: 'Curabitur ante eros, rutrum eget risus at, porttitor consequat urna. Vestibulum id accumsan lectus, quis aliquet orci. Nullam vel tortor in augue pellentesque viverra eget ut est. Sed nec magna quis ipsum porttitor blandit sed eu neque…'
            }
          ]
      };
    };
    componentDidMount(){
        AOS.init();
      }
    render() {
        const { news } = this.state;
        return (
            <React.Fragment>
               <main>
                    <div className="container">
                        <div className="intro_text">For press or media inquiries please contact us at <a href="mailto:oqeoapp@gmail.com">oqeoapp@gmail.com</a></div>
                        <section className="aos-init" data-aos="fade-up">
                            <div className="row">
                                {
                                    news.map(item => (
                                        <div key={uuid()} className="col-12 col-md-4 item-new aos-init" data-aos="fade-up" data-aos-delay="100">
                                            <div className="content-new">
                                                <div className="image">
                                                    <a href="/a" target="blank" >
                                                        <img src={item.src} alt="#"/>
                                                    </a>
                                                </div>
                                                <a href="/c" target="blank">
                                                    <h4 className="title-new">{item.title}</h4></a>
                                                <p className="des-new">{item.description}</p>
                                                <a className="read-more" href="/d" target="blank">Read More</a>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-12 text-center icon_action"><a className="btn btn-primary" href="/f">LOAD MORE</a></div>
                            </div>
                        </section>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}


export default ContentNews;
