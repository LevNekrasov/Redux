import { createStore, combineReducers } from 'redux';
import fieldChangeReducer from './fieldChangeReducer';
import serviceListReducer from './serviceListReducer';
import filterReducer from './filterReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  item: fieldChangeReducer,
  list: serviceListReducer,
  filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());