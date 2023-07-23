import { Map, Record } from 'immutable';

export interface ListsState extends Map<string, any> {
  products: Array<any>;
}

export const listsRecord = Record({
  products: [],
});
