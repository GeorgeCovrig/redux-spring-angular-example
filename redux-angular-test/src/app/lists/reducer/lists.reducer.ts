import { createReducer, on } from '@ngrx/store';
import * as actions from '../action/lists.action';
import { ListsState, listsRecord } from './lists.state';

export const initialState: ListsState = (new listsRecord() as unknown) as ListsState;

const guestReducer = createReducer(
  initialState,

  on(actions.loadProductsSuccess, (state, action) => {
    return {...state, products: action.data, error: null};
  }),
  on(actions.loadProductsFailure, (state, action) => {
    return {...state, products: [], error: action.error};
  }),
);

 export function reducer(state: ListsState | undefined, action: any) {
   return guestReducer(state, action); }

export const productList = (state: ListsState) => state.products;

