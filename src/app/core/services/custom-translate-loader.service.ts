
import {TranslateLoader} from '@ngx-translate/core';
import {Injectable} from '@angular/core';
import {AppInitService} from './app-init.service';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateLoaderService implements TranslateLoader {

  constructor(private appInitService: AppInitService) {
  }

  /**
   * Getting current translation from language service
   * @param lang parameter to label languages
   */
  public getTranslation(lang?: string): any {
    return this.appInitService.getConfigData();
  }

}
