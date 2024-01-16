import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigeventComponent } from './bigevent.component';

describe('BigeventComponent', () => {
  let component: BigeventComponent;
  let fixture: ComponentFixture<BigeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigeventComponent]
    });
    fixture = TestBed.createComponent(BigeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
