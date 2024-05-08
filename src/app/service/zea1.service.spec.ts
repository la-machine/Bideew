import { TestBed } from '@angular/core/testing';

import { Zea1Service } from './zea1.service';

describe('Zea1Service', () => {
  let service: Zea1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Zea1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
