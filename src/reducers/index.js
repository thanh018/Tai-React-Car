import { combineReducers } from 'redux';
import global from './global';
import network from './network';
// import language from './language';
// import currency from './currency';

const rootReducer = combineReducers({
  global,
  // language,
  // currency,
  network,
});

export default rootReducer;
