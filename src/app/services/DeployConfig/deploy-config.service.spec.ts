import { TestBed } from '@angular/core/testing';

import { DeployConfigService } from './deploy-config.service';

describe('DeployConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeployConfigService = TestBed.get(DeployConfigService);
    expect(service).toBeTruthy();
  });
});
