
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
import { environment } from '../environment/environment';

@Injectable()
export class ListsService extends Api {

  public getProductList(): Observable<any> {
    const reqOpts: any = {};
      reqOpts.params = new HttpParams();
    return this.http.get(environment.baseUrl + '/product/all', reqOpts);
  }

}
