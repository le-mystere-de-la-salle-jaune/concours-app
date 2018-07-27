import { TestBed, inject } from '@angular/core/testing';

import { PassageConcoursService } from './passage-concours.service';

describe('PassageConcoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassageConcoursService]
    });
  });

  it('should be created', inject([PassageConcoursService], (service: PassageConcoursService) => {
    expect(service).toBeTruthy();
  }));
});
