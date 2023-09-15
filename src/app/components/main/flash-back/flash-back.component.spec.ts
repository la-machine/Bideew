import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashBackComponent } from './flash-back.component';

describe('FlashBackComponent', () => {
  let component: FlashBackComponent;
  let fixture: ComponentFixture<FlashBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashBackComponent]
    });
    fixture = TestBed.createComponent(FlashBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
