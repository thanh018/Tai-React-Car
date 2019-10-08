import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';

const PartnerPageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Partnerpage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <PartnerPageDesktop />
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
)(Partnerpage);

Partnerpage.defaultProps = {
  device: 'mobile',
};

Partnerpage.propTypes = {
  device: PropTypes.string,
};
