import { TestBed } from '@angular/core/testing';

import { ZeinsideService } from './zeinside.service';

describe('ZeinsideService', () => {
  let service: ZeinsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeinsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
