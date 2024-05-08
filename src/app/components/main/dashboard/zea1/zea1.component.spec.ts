import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zea1Component } from './zea1.component';

describe('Zea1Component', () => {
  let component: Zea1Component;
  let fixture: ComponentFixture<Zea1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Zea1Component]
    });
    fixture = TestBed.createComponent(Zea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
