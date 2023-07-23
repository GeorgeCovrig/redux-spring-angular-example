
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
import { environment } from '../environment/environment';

@Injectable()
export class ListsService extends Api {

  public getProductList(): Observable<any> {
    const reqOpts: any = {};
   // if (params) {
      reqOpts.params = new HttpParams();
      // for (const k in params) {
      //   if (k) {
      //     reqOpts.params = reqOpts.params.set(k, params[k]);
      //   }
      // }
    //}
    return this.http.get(environment.baseUrl + '/test-server', reqOpts);
  }

}
