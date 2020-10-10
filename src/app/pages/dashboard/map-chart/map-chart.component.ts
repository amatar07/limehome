import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {map} from 'rxjs/operators';
import {HomeInterface} from '../../../shared/models/home.interface';


@Component({
  selector: 'app-map-chart',
  styleUrls: ['../../../../assets/styles/scss/components/_map-chart.component.scss'],
  templateUrl: './map-chart.component.html',
})
export class MapChartComponent implements OnInit {

  foundHomes: HomeInterface [];
  selectedIndex: number;


  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    this.retrieveHomeList();
  }


  /**
   * Retrieving list of homes
   */
  retrieveHomeList(): void {
    this.dashboardService.searchProperties(1, 2).pipe(
      map((data: any []) => {
        return this.dashboardService.formatHomes(data);
      })
    ).subscribe((result: HomeInterface []) => {
      this.foundHomes = result;
      this.selectedIndex = 0;
      this.foundHomes[this.selectedIndex].selected = true;
    });
  }

  /**
   * changing selected home index
   * @param index clicked element
   */
  toggleSelected(index: number): void {
    this.foundHomes[this.selectedIndex].selected = false;
    this.selectedIndex = index;
    this.foundHomes[this.selectedIndex].selected = true;

  }
}
