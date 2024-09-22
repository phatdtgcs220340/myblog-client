import { TestBed } from '@angular/core/testing';

import { FetchFilesService } from './fetch-files.service';

describe('FetchFilesService', () => {
  let service: FetchFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
