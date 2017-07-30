import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule.withServerTransition({ 
      appId: 'ng-cli-universal' 
    }),
    RouterModule.forRoot([
      {
        path: 'page1', component: Page1Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
