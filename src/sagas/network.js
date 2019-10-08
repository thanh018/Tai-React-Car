import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_IP,
  GET_IP_SUCCESS,
} from '../constants/network';

function* getIpAddress() {
  try {
    const ip = yield axios.get('//api.ipify.org');
    return ip.data;
  } catch (e) {
    return '0.0.0.0';
  }
}

function* getIP({
  resolve,
}) {
  const ip = yield getIpAddress();
  if (ip) {
    resolve(ip);
  } else {
    resolve('127.0.0.1');
  }
  yield put({ type: GET_IP_SUCCESS, ip });
}

export default function* network() {
  yield all([
    yield takeLatest(GET_IP, getIP),
  ]);
}
