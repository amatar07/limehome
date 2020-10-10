import {DashboardService} from '../dashboard.service';
import {DEMO_PROPERTIES} from '../../../shared/constants/demo-data.constants';
import {MapChartComponent} from './map-chart.component';
import {DashboardModule} from '../dashboard.module';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs/internal/observable/of';

describe('MapChartComponent', () => {

  let injector: TestBed;
  let component: MapChartComponent;
  let dashboardService: DashboardService;

  let fixture: ComponentFixture<MapChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        TranslateModule.forRoot(),
      ],
      declarations: [MapChartComponent],
      providers: [],
    });
    injector = getTestBed();
    fixture = TestBed.createComponent(MapChartComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.get(DashboardService);
    component.foundHomes = dashboardService.formatHomes(DEMO_PROPERTIES);
    fixture.detectChanges();
  });


  it('#ngOnInit()', (() => {

    spyOn(component, 'retrieveHomeList');

    component.ngOnInit();

    expect(component).toBeDefined();
    expect(component.retrieveHomeList).toHaveBeenCalled();

  }));

  it('#retrieveHomeList()', () => {
    spyOn(dashboardService, 'searchProperties').and.returnValue(of(DEMO_PROPERTIES));
    spyOn(dashboardService, 'formatHomes').and.callThrough();

    component.retrieveHomeList();

    expect(component.foundHomes).toBeDefined();
    expect(component.selectedIndex).toEqual(0);
    expect(component.foundHomes[component.selectedIndex].selected).toBeTruthy();


    expect(dashboardService.searchProperties).toHaveBeenCalled();
    expect(dashboardService.formatHomes).toHaveBeenCalled();
  });

  it('#toggleSelected()', (() => {
    component.selectedIndex = 0;
    component.foundHomes[component.selectedIndex].selected = true;
    expect(component.foundHomes[component.selectedIndex].selected).toBeTruthy();

    component.toggleSelected(1);
    expect(component.foundHomes[component.selectedIndex].selected).toBeTruthy();
    expect(component.selectedIndex).toEqual(1);
    expect(component.foundHomes[0].selected).toBeFalsy();

  }));
});
