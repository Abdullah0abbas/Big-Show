import { TestBed } from '@angular/core/testing';

import { SeriesApiServiceService } from './series-api-service.service';

describe('SeriesApiServiceService', () => {
  let service: SeriesApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
