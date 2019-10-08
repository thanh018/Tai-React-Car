import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentRide from 'components/ContentRide';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-2.png';

class RideDesktop extends React.PureComponent {
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
          titleBold="RIDE"
          title="with us"
          description="Carefully crafted with Love and Care for Ladies in mind"
        />
        <ContentRide />
        <Footer />
      </React.Fragment>
    );
  }
}

RideDesktop.propTypes = {
};

export default RideDesktop;
