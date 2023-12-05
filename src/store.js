// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/reducer'; // Assuming you have a reducer
//import Reducer from './redux/reducers/reducer'; // Assuming you have a reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
