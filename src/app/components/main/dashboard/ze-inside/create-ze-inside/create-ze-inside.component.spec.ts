import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZeInsideComponent } from './create-ze-inside.component';

describe('CreateZeInsideComponent', () => {
  let component: CreateZeInsideComponent;
  let fixture: ComponentFixture<CreateZeInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateZeInsideComponent]
    });
    fixture = TestBed.createComponent(CreateZeInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
