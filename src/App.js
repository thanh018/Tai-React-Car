import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'rebass';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';

import {
  about as aboutRoute,
  drive as driveRoute,
  partner as partnerRoute,
  service as serviceRoute,
  news as newsRoute,
  faq as faqRoute,
  ride as rideRoute,
  landing as landingRoute,
} from 'config/routesPath';

// Theme
import { defaultTheme } from './theme/GlobalStyled';


const DynamicImport = component => Loadable({
  loader: component,
  loading: () => null,
});
const App = (props) => {
  const { history } = props;
  const AboutPage = DynamicImport(() => import('views/About'));
  const DrivePage = DynamicImport(() => import('views/Drive'));
  const PartnerPage = DynamicImport(() => import('views/Partner'));
  const ServicePage = DynamicImport(() => import('views/Service'));
  const NewsPage = DynamicImport(() => import('views/News'));
  const FAQPage = DynamicImport(() => import('views/FAQ'));
  const RidePage = DynamicImport(() => import('views/Ride'));
  const LandingPage = DynamicImport(() => import('views/Landing'));
  return (
    <ConnectedRouter history={history}>
      <Provider theme={defaultTheme}>
        <div className="app-wrap">
          {/* Router begin */}
          <Switch>
            <Route path={`/${aboutRoute}`} component={AboutPage} />
            <Route path={`/${driveRoute}`} component={DrivePage} />
            <Route path={`/${partnerRoute}`} component={PartnerPage} />
            <Route path={`/${partnerRoute}`} component={PartnerPage} />
            <Route path={`/${serviceRoute}`} component={ServicePage} />
            <Route path={`/${newsRoute}`} component={NewsPage} />
            <Route path={`/${faqRoute}`} component={FAQPage} />
            <Route path={`/${rideRoute}`} component={RidePage} />
            <Route path={`/${landingRoute}`} component={LandingPage} />
          </Switch>
        </div>
      </Provider>
    </ConnectedRouter>
  );
};
App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default hot(module)(App);
