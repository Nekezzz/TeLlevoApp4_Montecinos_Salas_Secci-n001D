import { TestBed } from '@angular/core/testing';

import { RegistroCServiceService } from './registro-c-service.service';

describe('RegistroCServiceService', () => {
  let service: RegistroCServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroCServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
