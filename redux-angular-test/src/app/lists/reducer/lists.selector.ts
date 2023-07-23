

import * as fromList from './lists.reducer';
import { AppState } from '../../state.interface';
import { createSelector } from '@ngrx/store';

export const getState = (State: AppState) => State.list;
export const getProductList = createSelector(
  getState,
  fromList.productList
);
