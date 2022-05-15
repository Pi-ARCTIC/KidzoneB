import { TestBed } from '@angular/core/testing';

import { KidzoneService } from './kidzone.service';

describe('KidzoneService', () => {
  let service: KidzoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidzoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
