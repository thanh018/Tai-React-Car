import React from 'react';
import uuid from 'uuid/v1';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class ContentFAQ extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          count: -1,
          show: false,
          faq: [
              {
                  id: 1,
                  question: 'What are the Driving Requirements?',
                  answer: [
                      {
                          text: 'Verifiable 3 years driving experience in Malaysia'
                      },
                      {
                        text: 'No more than 1 cancellations in the previous 3 years for non-payment'
                    },
                    {
                        text: 'No more than 1 AF claim in the previous 3 years'
                    },
                    {
                        text: 'No more than 3 claims in the previous 6 years'
                    },{
                        text: 'No underage operators (under 25)'
                    },
                    {
                        text: 'No more than 3 Minor convictions'
                    },{
                        text: 'No Major or serious convictions'
                    }
                  ]
              },
              {
                id: 2,
                question: 'Can Males use the OQEO platform?',
                answer: [
                    {
                        text: 'Verifiable 3 years driving experience in Malaysia'
                    },
                    {
                      text: 'No more than 1 cancellations in the previous 3 years for non-payment'
                  },
                  {
                      text: 'No more than 1 AF claim in the previous 3 years'
                  },
                  {
                      text: 'No more than 3 claims in the previous 6 years'
                  },{
                      text: 'No underage operators (under 25)'
                  },
                  {
                      text: 'No more than 3 Minor convictions'
                  },{
                      text: 'No Major or serious convictions'
                  }
                ]
            },
            {
                id: 3,
                question: 'How Much Money Will I Make As A Driver?',
                answer: [
                    {
                        text: 'Verifiable 3 years driving experience in Malaysia'
                    },
                    {
                      text: 'No more than 1 cancellations in the previous 3 years for non-payment'
                  },
                  {
                      text: 'No more than 1 AF claim in the previous 3 years'
                  },
                  {
                      text: 'No more than 3 claims in the previous 6 years'
                  },{
                      text: 'No underage operators (under 25)'
                  },
                  {
                      text: 'No more than 3 Minor convictions'
                  },{
                      text: 'No Major or serious convictions'
                  }
                ]
            },{
                id: 4,
                question: 'What are the operating areas of OQEO?',
                answer: [
                    {
                        text: 'Verifiable 3 years driving experience in Malaysia'
                    },
                    {
                      text: 'No more than 1 cancellations in the previous 3 years for non-payment'
                  },
                  {
                      text: 'No more than 1 AF claim in the previous 3 years'
                  },
                  {
                      text: 'No more than 3 claims in the previous 6 years'
                  },{
                      text: 'No underage operators (under 25)'
                  },
                  {
                      text: 'No more than 3 Minor convictions'
                  },{
                      text: 'No Major or serious convictions'
                  }
                ]
            },{
                id: 5,
                question: 'Does OQEO Apply Surge Pricing?',
                answer: [
                    {
                        text: 'Verifiable 3 years driving experience in Malaysia'
                    },
                    {
                      text: 'No more than 1 cancellations in the previous 3 years for non-payment'
                  },
                  {
                      text: 'No more than 1 AF claim in the previous 3 years'
                  },
                  {
                      text: 'No more than 3 claims in the previous 6 years'
                  },{
                      text: 'No underage operators (under 25)'
                  },
                  {
                      text: 'No more than 3 Minor convictions'
                  },{
                      text: 'No Major or serious convictions'
                  }
                ]
            }
          ]
      };
    }

    handleCheck(e) {
        if(e.currentTarget.dataset.id === e.currentTarget.attributes['data-id'].value) {
            e.currentTarget.classList.toggle("active");
        }
     }
     componentDidMount(){
        AOS.init();
      }
    render() {
        const { faq, show } = this.state;
        console.log(show);
        return (
            <main className="faq-page">
                <div className="container">
                    <div className="row">
                        {
                            faq.map((item, index) => (
                                <div className="col-12 aos-init" key={uuid()} data-aos="fade-up" data-aos-delay="100">
                                    <div className="faq" onClick={this.handleCheck.bind(this)} data-id={index + 1}>
                                        <span><i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i></span>
                                        <span>{item.question}</span>
                                        <div className="answer">
                                            <ul>
                                                {
                                                    item.answer.map(ans => (
                                                        <li key={uuid()}>- {ans.text}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="col-12">
                            <div className="end_text">
                                <h2 className="et_pb_text_inner">
                            Have more questions? <br></br>Contact our support team at  <a href="mailto:support@oqeo.com">support@oqeo.com</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default ContentFAQ;
