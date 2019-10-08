import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentService from 'components/ContentService';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-5.png';

class ServiceDesktop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner
          imgBanner={imgBanner}
          titleBold='Make Your Life Easier'
          description='See what they’re talking about women safety'
        />
        <ContentService />
        <Footer />
      </React.Fragment>
    );
  }
}

ServiceDesktop.propTypes = {
};

export default ServiceDesktop;
