import { CHANGE_INPUT_VALUE, RESET_FORM, SET_FORM } from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  clickedId: ''
}

const fieldChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_FORM:
      return { name: '', price: '', clickedId: '' };
    case SET_FORM:
      return {...action.payload};
    default:
      return state;
  }
}

export default fieldChangeReducer;