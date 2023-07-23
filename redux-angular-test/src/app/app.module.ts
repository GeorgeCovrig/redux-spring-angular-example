import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsSandbox } from './lists/lists.sandbox';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListsEffect } from './lists/effects/lists.effect';
import { metaReducers, reducers } from './reducer.interface';
import { ListsService } from './lists/lists.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ListsEffect]),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([ListsEffect]),
  ],
  providers: [ListsSandbox, ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
