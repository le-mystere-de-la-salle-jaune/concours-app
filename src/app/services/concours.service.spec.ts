import { TestBed, inject } from '@angular/core/testing';

import { ConcoursService } from './concours.service';

describe('ConcoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcoursService]
    });
  });

  it('should be created', inject([ConcoursService], (service: ConcoursService) => {
    expect(service).toBeTruthy();
  }));
});
