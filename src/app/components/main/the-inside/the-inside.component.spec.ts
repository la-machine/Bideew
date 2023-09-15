import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInsideComponent } from './the-inside.component';

describe('TheInsideComponent', () => {
  let component: TheInsideComponent;
  let fixture: ComponentFixture<TheInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheInsideComponent]
    });
    fixture = TestBed.createComponent(TheInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
