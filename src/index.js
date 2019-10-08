import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
// import { ApolloProvider } from 'react-apollo';
// import { graphqlConfig } from 'config/api';

// import AWSAppSyncClient from 'aws-appsync';
// import { Rehydrated } from 'aws-appsync-react';
// import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';


const MOUNT_NODE = document.getElementById('root');
const history = createBrowserHistory();
const storePersist = configureStore({}, history);

const { store, persistor } = storePersist;

// const client = new AWSAppSyncClient({
//   url: graphqlConfig.url,
//   region: 'ap-northeast-1',
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: graphqlConfig.apiKey,
//   },
//   disableOffline: true,
//   connectToDevTools: true,
// });

const render = () => {
  // store.dispatch(getLanguage());
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App history={history} />
      </PersistGate>
    </Provider>,
    MOUNT_NODE,
  );
};
render();
