import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../../shared/constants/api-config.constants';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {DEMO_PROPERTIES} from '../../shared/constants/demo-data.constants';
import {HomeInterface} from '../../shared/models/home.interface';

@Injectable()
export class DashboardService {

  private delay = 1000;


  constructor() {
  }


  /**
   * gets properties within selected properties
   * @param lat
   * @param long
   */
  searchProperties(lat: number, long: number): Observable<any> {

    const url = API_URLS.PROPERTY_SERVICE.FIND_PROPERTIES;
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('long', long.toString());


    return of(DEMO_PROPERTIES).pipe(delay(this.delay));
  }


  /**
   * Formatting home list to interface
   * @param data
   */
  formatHomes(data: any []): HomeInterface[] {
    const homes: HomeInterface [] = [];
    data.forEach((item) => {

      const singleHome: HomeInterface = {
        location: {
          lat: item.location.lat,
          long: item.location.long,
        },
        propertyId: item.propertyId,
        name: item.name,
        price: item.price,
        distanceFromCenter: item.distanceFromCenter,
      };

      homes.push(singleHome);

    });
    return homes;
  }


  /**
   * creates booking for a property
   */
  createPropertyBooking(): Observable<any> {
    const url = API_URLS.BOOKING_SERVICE.CREATE_BOOKING;

    return of(true).pipe(delay(this.delay));
  }

  /**
   * retrieves bookings of a certain property
   * @param propertyId
   */
  getPropertyBookings(propertyId: string): Observable<any> {
    const url = API_URLS.PROPERTY_SERVICE.RETRIEVE_BOOKINGS;
    url.replace('{propertyId}', propertyId);

    return of(true).pipe(delay(this.delay));
  }
}
