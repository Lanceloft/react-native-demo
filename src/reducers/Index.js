import { combineReducers } from 'redux-immutable';
import homeState from './Home';

const rootReducer = combineReducers({
  homeState,
});

export default rootReducer;
