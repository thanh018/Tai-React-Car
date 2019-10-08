import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';


const RidePageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Ridepage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <RidePageDesktop />
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
)(Ridepage);

Ridepage.defaultProps = {
  device: 'mobile',
};

Ridepage.propTypes = {
  device: PropTypes.string,
};
