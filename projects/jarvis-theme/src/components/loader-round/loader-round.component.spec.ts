import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderRound } from './loader-round.component';

describe('LoaderRoundComponent', () => {
  let component: LoaderRound;
  let fixture: ComponentFixture<LoaderRound>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoaderRound]
    });
    fixture = TestBed.createComponent(LoaderRound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
