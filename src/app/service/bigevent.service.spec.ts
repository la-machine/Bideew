import { TestBed } from '@angular/core/testing';

import { BigeventService } from './bigevent.service';

describe('BigeventService', () => {
  let service: BigeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
