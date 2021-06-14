// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//   items: [],
//   filter: '',
// };

// const contactReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'Contact/addition':
//       return {
//         ...state,
//         items: [payload, ...state.contacts.items],
//       };
//     case 'Contact/addition':
//       return {
//         ...state,
//         items: state.contacts.items.filter(({ id }) => id !== payload),
//       };
//     case 'Contact/addition':
//       return { ...state, filter: payload };

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware([])),
// );

// export default store;
