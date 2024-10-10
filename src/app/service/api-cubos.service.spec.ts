import { TestBed } from '@angular/core/testing';

import { ApiCubosService } from './api-cubos.service';

describe('ApiCubosService', () => {
  let service: ApiCubosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCubosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
