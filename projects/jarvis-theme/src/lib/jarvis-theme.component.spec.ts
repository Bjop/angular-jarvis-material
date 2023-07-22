import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvisThemeComponent } from './jarvis-theme.component';

describe('JarvisThemeComponent', () => {
  let component: JarvisThemeComponent;
  let fixture: ComponentFixture<JarvisThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JarvisThemeComponent]
    });
    fixture = TestBed.createComponent(JarvisThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
