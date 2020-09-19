// import uuid from 'uuid'
import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Pancake Mix'},
    { id: uuid(), name: 'Milk'},
    { id: uuid(), name: 'Sugar'}
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return { 
        ...state
      }
    default: 
      return state;
  }
}