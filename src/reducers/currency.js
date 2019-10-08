// import produce from 'immer';
// import {
//   // CURRENCY_LOAD,
//   CURRENCY_SWITCH,
// } from '../constants/currency';

// const initialState = {
//   all: ['JPY', 'USD'],
//   list: {
//     USD: {
//       name: 'United State Dollar',
//       symbol: '$',
//     },
//     JPY: {
//       name: 'Japan Yen',
//       symbol: '¥',
//     },
//   },
//   current: 'JPY',
//   text: {},
// };

// export default function currencyReducer(state = initialState, action) {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case CURRENCY_SWITCH:
//         draft.current = action.data;
//         return draft;
//       default:
//         return draft;
//     }
//   });
// }
