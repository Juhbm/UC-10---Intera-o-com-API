import { TestBed } from '@angular/core/testing';

import { DestaquesService } from './destaques.service';

describe('DestaquesService', () => {
  let service: DestaquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestaquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
