import { TestBed } from '@angular/core/testing';

import { StonksService } from './stonks.service';

describe('StonksService', () => {
  let service: StonksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StonksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
