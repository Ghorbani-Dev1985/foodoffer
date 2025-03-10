import { TestBed } from '@angular/core/testing';

import { ToggleSearchBoxService } from './toggle-search-box.service';

describe('ToggleSearchBoxService', () => {
  let service: ToggleSearchBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSearchBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
