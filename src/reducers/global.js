import device from 'current-device';
import produce from 'immer';
// The initial state of the App
const initialState = {
  device: device.noConflict(),
};

export default function globalReducer(state = initialState, action) {
  // eslint-disable-next-line no-unused-vars
  return produce(state, (_draft) => {
    switch (action.type) {
      default: return state;
    }
  });
}
