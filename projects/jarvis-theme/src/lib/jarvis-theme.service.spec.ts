import { TestBed } from '@angular/core/testing';

import { JarvisThemeService } from './jarvis-theme.service';

describe('JarvisThemeService', () => {
  let service: JarvisThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarvisThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
