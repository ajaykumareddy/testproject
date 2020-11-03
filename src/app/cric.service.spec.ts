import { TestBed } from '@angular/core/testing';

import { CricService } from './cric.service';

describe('CricService', () => {
  let service: CricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
