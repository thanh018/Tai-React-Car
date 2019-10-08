import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';

const ServicePageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Servicepage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <ServicePageDesktop />
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
)(Servicepage);

Servicepage.defaultProps = {
  device: 'mobile',
};

Servicepage.propTypes = {
  device: PropTypes.string,
};
