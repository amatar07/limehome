import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppInitService} from './app-init.service';

describe('AppInitService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let appInitService: AppInitService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppInitService,
      ],
    });
    injector = getTestBed();

    appInitService = injector.get(AppInitService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });


  it('#getDefaultLanguage()', () => {

    appInitService.getDefaultLanguage().subscribe();

    const url = '/assets/i18n/de-default-wording.json';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(null);
  });

  it('#getConfigData()', () => {
    appInitService.languageFile = 'language';
    appInitService.getConfigData().subscribe(
      value => {
        expect(value).toBe(appInitService.languageFile);
      },
    );
  });


});
