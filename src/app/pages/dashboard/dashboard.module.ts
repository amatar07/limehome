
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {DashboardRoutes} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {MapChartComponent} from './map-chart/map-chart.component';
import {AgmCoreModule} from '@agm/core';
import {DashboardService} from './dashboard.service';


@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALPne5WG84dBgePXyp05nl0rN7iBw5nW4',
      libraries: ['places']
    })
  ],
  declarations: [
    DashboardComponent,
    MapChartComponent,
  ],
  entryComponents: [],
  providers: [
    DashboardService
  ],
})
export class DashboardModule {
}
