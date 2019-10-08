import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import ContentNews from 'components/ContentNews';
import Footer from 'components/Footer';
import imgBanner from 'assets/images/banner/banner-6.png';

class NewsDesktop extends React.PureComponent {
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
          titleBold="NEWS ABOUT WOMEN SAFETY"
          description="See what they’re talking about women safety"
        />
        <ContentNews />
        <Footer />
      </React.Fragment>
    );
  }
}

NewsDesktop.propTypes = {
};

export default NewsDesktop;
