import { all, fork } from 'redux-saga/effects';

import network from './network';

export default function* root() {
  yield all([
    fork(network),
  ]);
}
