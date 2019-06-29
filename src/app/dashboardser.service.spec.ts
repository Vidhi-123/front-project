import { TestBed } from '@angular/core/testing';

import { DashboardserService } from './dashboardser.service';

describe('DashboardserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardserService = TestBed.get(DashboardserService);
    expect(service).toBeTruthy();
  });
});
