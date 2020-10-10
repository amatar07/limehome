import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {

  languageFile: any;

  constructor(private http: HttpClient) {
  }


  /**
   * Getting language files
   */
  appInit(): Observable<any> {

    return this.getDefaultLanguage().pipe(
      map((response: any) => {
        this.languageFile = response;
        return response;
      }));
  }

  /**
   * Retrieving observable of set data for translate module
   */
  public getConfigData(): any {
    return of(this.languageFile);
  }

  /**
   * fetches the language file
   */
  public getDefaultLanguage(): Observable<any> {
    return this.http.get('/assets/i18n/de-default-wording.json');
  }


}
