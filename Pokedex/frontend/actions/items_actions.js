import * as APIUtil from '../util/api_util'; 

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'; 

export const receiveItems = item => ({
  type: RECEIVE_ITEMS, 
  items
});



