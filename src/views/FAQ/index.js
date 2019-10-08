import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';


const FAQPageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class FAQpage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <FAQPageDesktop />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    global: {
      device: {
        type: device,
      },
    },
  } = state;
  return { device };
};

const withRedux = connect(mapStateToProps);

export default compose(
  withRedux,
)(FAQpage);

FAQpage.defaultProps = {
  device: 'mobile',
};

FAQpage.propTypes = {
  device: PropTypes.string,
};
