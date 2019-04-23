import { combineReducers } from 'redux';
import initReducer from './reducer-init';

const rootReducer = combineReducers({
  init: initReducer,
});

export default rootReducer;
