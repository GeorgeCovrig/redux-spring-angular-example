import { Component } from '@angular/core';
import { ListsSandbox } from './lists/lists.sandbox';
import { listsRecord } from './lists/reducer/lists.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-angular-test';
  listsSandbox: ListsSandbox;

  constructor(listSandbox: ListsSandbox){
    this.listsSandbox = listSandbox;
    listSandbox.dispatchGetProductListAction();

    listSandbox.getProductList().subscribe((data)=>{
        console.log(data);
    })
  }
}
