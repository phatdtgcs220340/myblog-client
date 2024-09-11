import { TestBed } from '@angular/core/testing';

import { FetchTagService } from './fetch-tag.service';

describe('FetchTagService', () => {
  let service: FetchTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
