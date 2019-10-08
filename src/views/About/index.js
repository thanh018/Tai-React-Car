import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';


const AboutPageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Aboutpage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <AboutPageDesktop />
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
)(Aboutpage);

Aboutpage.defaultProps = {
  device: 'mobile',
};

Aboutpage.propTypes = {
  device: PropTypes.string,
};
