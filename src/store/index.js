import { createStore } from 'redux';
import rootReducer from '../reducers'

import { addListFromApi } from '../actions/todoActions.js'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addListFromApi);

store.subscribe(() => {
  console.log(store.getState());
})

export default store;
