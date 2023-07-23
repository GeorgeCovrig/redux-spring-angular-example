
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState as State } from './state.interface';

import * as fromList from './lists/reducer/lists.reducer';
import {environment} from './environment/environment'



export const reducers: ActionReducerMap<State> = {

  list: fromList.reducer,

};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function(state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
