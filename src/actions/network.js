import {
  GET_IP,
  GET_IP_SUCCESS,
  GET_IP_FAIL,
  GET_USERAGENT,
} from '../constants/network';

export const getIP = (
  resolve,
  reject,
) => ({
  type: GET_IP,
  resolve,
  reject,
});

export const getIPSuccess = ip => ({
  type: GET_IP_SUCCESS,
  ip,
});

export const getIPFail = () => ({
  type: GET_IP_FAIL,
});

export const getUserAgent = () => ({
  type: GET_USERAGENT,
});
