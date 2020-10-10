import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {DashboardLayoutComponent} from './components/dashboard-layout/dashboard-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {CustomTranslateLoaderService} from './services/custom-translate-loader.service';
import {AppInitService} from './services/app-init.service';


export const CORE_COMPONENTS = [
  DashboardLayoutComponent,
  HeaderComponent,
];


export function TranslateLoaderFactory(appInitService: AppInitService): any {
  return new CustomTranslateLoaderService(appInitService);
}

export function appInitializerFactory(appInitService: AppInitService): any {
  return () => {
    return appInitService.appInit()
      .toPromise().catch(error => error);
  };
}

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [AppInitService],
      },
    }),
  ],
  declarations: [
    CORE_COMPONENTS,
  ], exports: [
    CORE_COMPONENTS,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppInitService],
      multi: true,
    },
  ],

})


export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
