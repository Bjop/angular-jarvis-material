import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdown } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: Dropdown;
  let fixture: ComponentFixture<Dropdown>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dropdown]
    });
    fixture = TestBed.createComponent(Dropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
