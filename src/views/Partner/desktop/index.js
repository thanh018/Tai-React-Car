import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentPartner from 'components/ContentPartner';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-8.png';

class LoginDesktop extends React.PureComponent {
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
          titleBold='Partner'
          title='with us'
          description='Join our community to embrace woman power together'
        />
        <ContentPartner />
        <Footer />
      </React.Fragment>
    );
  }
}

LoginDesktop.propTypes = {
};

export default LoginDesktop;
