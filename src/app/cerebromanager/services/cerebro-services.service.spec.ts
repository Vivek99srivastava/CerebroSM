import { TestBed } from '@angular/core/testing';

import { CerebroServicesService } from './cerebro-services.service';

describe('CerebroServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CerebroServicesService = TestBed.get(CerebroServicesService);
    expect(service).toBeTruthy();
  });
});
