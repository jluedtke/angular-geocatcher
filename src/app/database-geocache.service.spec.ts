import { TestBed, inject } from '@angular/core/testing';

import { DatabaseGeocacheService } from './database-geocache.service';

describe('DatabaseGeocacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseGeocacheService]
    });
  });

  it('should ...', inject([DatabaseGeocacheService], (service: DatabaseGeocacheService) => {
    expect(service).toBeTruthy();
  }));
});
