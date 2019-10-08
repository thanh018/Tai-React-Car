import {
  GET_IP_SUCCESS,
} from '../constants/network';

const initialState = {
  ip: '',
};

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IP_SUCCESS:
      return Object.assign(initialState, {
        ip: action.ip,
      });
    default:
      return state;
  }
}
