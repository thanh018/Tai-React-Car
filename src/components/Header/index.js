import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import logo from 'assets/images/logo/logo.png';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          show: false,
      };
    }
    handleShowMenuMobile(e) {
        const { show } = this.state;
        this.setState({
            show: !show,
        })

    }
    render() {
        const { show } = this.state;
        const { 
            history: {
                location: {
                    pathname
                }
            } 
        } = this.props;
        return (
            <React.Fragment>
                <header className="header-fixed">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-3">
                                <a href="/a"><img className="attachment-full size-full logo-image" width="" height="" src={logo} alt="" /></a>
                            </div>
                            <div className="col-6 col-md-9 text-right">
                                <div className="burger_menu" onClick={this.handleShowMenuMobile.bind(this)}>
                                    {
                                        show === true ? (
                                            <i class="text-white fas fa-times"></i>
                                        ): (
                                            <i className="text-white fas fa-bars"></i>
                                        )
                                    }
                                    </div>
                                <nav className={`Right ${show === true ? 'open' : ''}`}>
                                    <div className="menu-main-container">
                                        <ul className="nav-menu" id="menu-main">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-185" id="menu-item-185"><a className={`${pathname === '/ride' ? 'active' : ''}`}href="/ride">Ride</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184" id="menu-item-184"><a className={`${pathname === '/drive' ? 'active' : ''}`}href="/drive">Drive</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-277" id="menu-item-277"><a className={`${pathname === '/service' ? 'active' : ''}`}href="/service">Service</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-277" id="menu-item-277"><a className={`${pathname === '/about' ? 'active' : ''}`}href="/about">About Us</a></li>
                                            <li className="menu-item menu-item-type-post_type_archive menu-item-object-news menu-item-276" id="menu-item-276"><a className={`${pathname === '/news' ? 'active' : ''}`}href="/news">In the News</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-547" id="menu-item-547"><a className={`${pathname === '/partner' ? 'active' : ''}`}href="/partner">Partners</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-685" id="menu-item-685"><a className={`${pathname ==='/faq' ? 'active' : ''}`}href="/faq">Faq</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>       
                
            </React.Fragment>
        )
    }
}


export default withRouter((Header));
