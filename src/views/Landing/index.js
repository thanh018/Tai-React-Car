import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';


const LandingPageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Landingpage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <LandingPageDesktop />
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
)(Landingpage);

Landingpage.defaultProps = {
  device: 'mobile',
};

Landingpage.propTypes = {
  device: PropTypes.string,
};
