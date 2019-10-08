import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loadable from 'react-loadable';
import { compose } from 'recompose';


const NewsPageDesktop = Loadable({
  loader: () => import('./desktop'),
  loading: () => null,
});

class Newspage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <NewsPageDesktop />
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
)(Newspage);

Newspage.defaultProps = {
  device: 'mobile',
};

Newspage.propTypes = {
  device: PropTypes.string,
};
