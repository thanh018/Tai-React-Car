import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

class ContentDrive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount(){
        AOS.init();
      }
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="describe-block text-center">
                            <div className="describe-text">
                                <p>Regardless you are business owners who want to promote your lady products, or you are school principals/ hospital directors who want to help your customers, we are able to help.</p>
                                <p>Get exclusive promotional codes for your customers, unlock cash bonuses and get an advertisement with our platform. From Her to Her.</p>
                                <p>Our parnerships with non-profit organizations and women-led bodies are to provide FREE services for women and their children who are in need. Get involved, partner with us</p>
                            </div>
                        </div>
                        <div className="text-center icon_action"><a className="btn btn-primary" href="/c">BECOME A PARTNER</a></div>
                    </div>
                    <section className="signup_form aos-init aos-animate" id="signup" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form className="wpcf7-form" action="#" method="post" novalidate="novalidate">
                                        <section className="partners-form aos-init aos-animate" data-aos="fade-up">
                                            <div className="container">
                                                <h1 className="title-text">
                                                    <strong>BE THE FIRST</strong>
                                                    TO JOIN
                                                </h1>
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-md-10">
                                                        <div className="card">
                                                            <div className="card-title">
                                                                <h4>Partner Application Form</h4>
                                                                <p className="des">Kindly fill in the information below, our people will contact you shortly</p>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="form-group">
                                                                    <label>Name* </label>
                                                                    <br></br><span className="wpcf7-form-control-wrap last-name">
                                                                    <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" type="text" name="name" value="" size="40" aria-required="true" aria-invalid="false" /></span>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Phone Number* </label>
                                                                    <br></br><span className="wpcf7-form-control-wrap phone-number">
                                                                    <input className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" type="tel" name="phone-number" value="" size="40" aria-required="true" aria-invalid="false" /></span>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Email Address* </label>
                                                                    <br></br><span className="wpcf7-form-control-wrap your-email">
                                                                    <input className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" type="email" name="your-email" value="" size="40" aria-required="true" aria-invalid="false" /></span>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Your Idea</label>
                                                                    <br></br><span className="wpcf7-form-control-wrap additional-comments">
                                                                    <textarea className="wpcf7-form-control wpcf7-textarea form-control" name="additional-comments" cols="40" rows="10" aria-invalid="false"></textarea></span>
                                                                </div>
                                                                <div className="form-group"><small>By clicking on "Submit" you agree to our <a href="/b">Terms of Use</a> and our <a href="/d">Privacy Policy</a></small></div>
                                                                <div className="form-submit">
                                                                    <input className="wpcf7-form-control wpcf7-submit submit Send btn btn-primary" type="submit" value="Submit" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
            </React.Fragment>
        )
    }
}


export default ContentDrive;
