import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';

const DrivePageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Drivepage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <DrivePageDesktop />
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
)(Drivepage);

Drivepage.defaultProps = {
  device: 'mobile',
};

Drivepage.propTypes = {
  device: PropTypes.string,
};
