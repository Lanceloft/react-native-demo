import { Map } from 'immutable';
import {
  ADD_NUMBER,
  REDUCE_NUMBER
} from '../actions/Types';

const initState = Map({
    number: 1,
});

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state.set('number', state.get('number') + 1)
    case REDUCE_NUMBER:
      return state.set('number', state.get('number') - 1)
    default:
      return state
  }
};

export default mainReducer;
