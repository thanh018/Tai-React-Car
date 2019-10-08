import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentLanding from 'components/ContentLanding';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-8.png';

class LandingDesktop extends React.PureComponent {
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
          titleBold="From HER to HER"
          description="Women deserve to be"
        />
        <ContentLanding />
        <Footer />
      </React.Fragment>
    );
  }
}

LandingDesktop.propTypes = {
};

export default LandingDesktop;
