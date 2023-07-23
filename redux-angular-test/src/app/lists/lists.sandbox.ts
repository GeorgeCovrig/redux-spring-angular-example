
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Subject, Observable } from 'rxjs';
import * as store from '../state.interface';
import {
  getProductList

} from './reducer/lists.selector';
import { loadProducts } from './action/lists.action';

@Injectable()
export class ListsSandbox {
  public categoryList$ = this.appState$.select(getProductList);
 


  private subscriptions: Array<Subscription> = [];
  /** create a subject send the value from menucomponent and recieve value to productFilterComponent*/
  productFilterData = new Subject<any>();

  constructor(
    private router: Router,
    protected appState$: Store<store.AppState>
  ) {
    const params: any = {};
  }
  public dispatchGetProductListAction(): void {
    this.appState$.dispatch(loadProducts());
  }

  public getProductList(): Observable<any[]> {
    return this.appState$.select(getProductList);
  }

}
