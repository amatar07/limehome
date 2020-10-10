
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CardComponent} from './components/card/card.component';


export const SHARED_MODULES = [
  CommonModule,
  RouterModule,
  TranslateModule,
];

export const SHARED_COMPONENTS = [
  CardComponent,
];


@NgModule({
  imports: [
    SHARED_MODULES,
  ],
  declarations: [
    SHARED_COMPONENTS,
  ], exports: [
    SHARED_MODULES,
    SHARED_COMPONENTS,
  ],
  providers: [],
})
export class SharedModule {

}
