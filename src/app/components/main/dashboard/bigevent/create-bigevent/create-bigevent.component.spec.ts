import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBigeventComponent } from './create-bigevent.component';

describe('CreateBigeventComponent', () => {
  let component: CreateBigeventComponent;
  let fixture: ComponentFixture<CreateBigeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBigeventComponent]
    });
    fixture = TestBed.createComponent(CreateBigeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
