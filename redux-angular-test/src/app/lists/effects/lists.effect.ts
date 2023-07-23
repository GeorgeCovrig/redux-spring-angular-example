
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as store from '../../state.interface';
import { ListsService } from '../lists.service';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './../action/lists.action';


@Injectable()
export class ListsEffect {
  constructor(
    private actions$: Actions,
    private appState$: Store<store.AppState>,
    private listService: ListsService
  ) {}

  loadGuests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.listService.getProductList().pipe(
          map((data) => {
            console.log("DATA: " + data)
            return loadProductsSuccess({data})
          }),
          catchError(
            error => of(loadProductsFailure({error}))
          )
        ))
    );
  });

}
