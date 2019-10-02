import { TestBed } from '@angular/core/testing';

import { CourseSearchService } from './course-search.service';

describe('CourseSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseSearchService = TestBed.get(CourseSearchService);
    expect(service).toBeTruthy();
  });
});
