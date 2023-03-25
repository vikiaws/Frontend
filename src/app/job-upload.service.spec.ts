import { TestBed } from '@angular/core/testing';

import { JobUploadService } from './job-upload.service';

describe('JobUploadService', () => {
  let service: JobUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
