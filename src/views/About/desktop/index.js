import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentAbout from 'components/ContentAbout';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-7.png';

class AboutDesktop extends React.PureComponent {
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
          titleBold="About"
          title="with us"
          description="Join our woman empowerment journey"
        />
        <ContentAbout />
        <Footer />
      </React.Fragment>
    );
  }
}

AboutDesktop.propTypes = {
};

export default AboutDesktop;
