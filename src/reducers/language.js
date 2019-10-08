// import produce from 'immer';
// import {
//   LANGUAGE_LOAD,
//   LANGUAGE_SWITCH,
// } from '../constants/language';

// const initialState = {
//   all: ['en', 'ja'],
//   list: {
//     en: {
//       name: 'English',
//     },
//     ja: {
//       name: 'Japan',
//     },
//   },
//   current: 'ja',
//   text: {},
// };

// const importLanguage = (state) => {
//   const { current } = state;
//   return require(`../translations/${current}`).default //eslint-disable-line
// };

// export default function languageReducer(state = initialState, action) {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case LANGUAGE_LOAD:
//         draft.text = importLanguage(state);
//         return draft;
//       case LANGUAGE_SWITCH:
//         draft.current = action.data;
//         return draft;
//       default:
//         return draft;
//     }
//   });
// }
