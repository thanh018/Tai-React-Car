import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Banner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
        const { imgBanner, titleBold, title, description } = this.props;
        return (
            <React.Fragment>
                <div className="banner-block">
                    <div className="block-image">
                        <img src={imgBanner} alt="#"/>
                    </div>
                    <div className="banner-overlay"></div>
                    <div className="banner-content text-center">
                        <h1 className="banner-title"><span>{titleBold}</span> {title}</h1>
                        {
                            description.length > 0 && (
                                <p className="banner-text">{description}</p>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Banner.defaultProps = {
    imgBanner: '',
    titleBold: '',
    title: '',
    description: '',
}

Banner.propTypes = {
    imgBanner: PropTypes.string,
    titleBold: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}


export default Banner;
