import { FILTER_LIST } from '../actions/actionTypes';

const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default filterReducer;