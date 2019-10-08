import React from 'react';
import './style.css';
import logo from 'assets/images/logo/logo.png';

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-8 col-md-6 col-lg-3"><a className="logo" href="/l"><img className="attachment-medium size-medium logo-image" width="" height="" src={logo} alt="Logo" /></a></div>
                            <div className="col-12 col-lg-3 d-none d-lg-block">
                                <ul className="app_links d-flex align-items-center justify-content-between">
                                    <li className="app_link"><a href="https://itunes.apple.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/2000px-Download_on_the_App_Store_Badge.svg_-300x89.png" alt="" sizes="(max-width: 300px) 100vw, 300px" /></a></li>
                                    <li className="app_link"><a href="https://play.google.com/"><img className="attachment-medium size-medium" width="300" height="89" src="https://driveher.ca/wp-content/uploads/2018/08/google-play-badge-e1535519906376-300x89.png" alt=""  sizes="(max-width: 300px) 100vw, 300px" /></a></li>
                                </ul>
                            </div>
                            <div className="col-4 col-md-6">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-12 col-md-8 d-none d-lg-block">
                                        <ul className="nav-menu" id="menu-footer">
                                            <li><a href="/t">Terms</a></li>
                                            <li><a href="/p">Privacy</a></li>
                                            <li><a href="/faq" aria-current="page">Faq</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <ul className="social_icon d-flex align-items-center justify-content-around">
                                            <li className="social_icon"><a href="/f" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                                            <li className="social_icon"><a href="/e" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="bottom-bar py-2">
                    <div className="container">
                        <ul className="nav-menu d-flex d-lg-none" id="menu-footer">
                            <li><a href="/f">Terms</a></li>
                            <li><a href="/v">Privacy</a></li>
                            <li><a href="/faq" aria-current="page">Faq</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer;
