import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[PRODUCTS] Load Products'
);

export const loadProductsSuccess = createAction(
  '[PRODUCTS] Load Products Success',
props<{ data: any }>()
);

export const loadProductsFailure = createAction(
  '[PRODUCTS] Load Products Failure',
  props<{ error: any }>()
);
