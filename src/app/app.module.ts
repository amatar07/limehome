import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'en-GB',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
