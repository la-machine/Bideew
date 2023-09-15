import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeA1Component } from './ze-a1.component';

describe('ZeA1Component', () => {
  let component: ZeA1Component;
  let fixture: ComponentFixture<ZeA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeA1Component]
    });
    fixture = TestBed.createComponent(ZeA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
