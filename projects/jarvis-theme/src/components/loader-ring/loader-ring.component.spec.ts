import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderRingComponent } from './loader-ring.component';

describe('LoaderRingComponent', () => {
  let component: LoaderRingComponent;
  let fixture: ComponentFixture<LoaderRingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoaderRingComponent]
    });
    fixture = TestBed.createComponent(LoaderRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
