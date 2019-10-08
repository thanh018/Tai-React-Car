import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentFAQ from 'components/ContentFAQ';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-7.png';

class FAQDesktop extends React.PureComponent {
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
           titleBold='Frequently Asked Questions'
        />
        <ContentFAQ />
        <Footer />
      </React.Fragment>
    );
  }
}

FAQDesktop.propTypes = {
};

export default FAQDesktop;
