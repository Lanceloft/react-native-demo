import * as types from './Types';

export const addNumber = () => {
  return {
    type: types.ADD_NUMBER
  }
}

export const reduceNumber = () => {
  return {
    type: types.REDUCE_NUMBER
  }
}
