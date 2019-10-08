import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentDrive from 'components/ContentDrive';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-1.png';

class DriverDesktop extends React.PureComponent {
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
          titleBold="DRIVE"
          title="with us"
          description="Join our woman empowerment journey"
        />
        <ContentDrive />
        <Footer />
      </React.Fragment>
    );
  }
}

DriverDesktop.propTypes = {
};

export default DriverDesktop;
