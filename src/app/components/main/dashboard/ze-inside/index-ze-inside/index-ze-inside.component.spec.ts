import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexZeInsideComponent } from './index-ze-inside.component';

describe('IndexZeInsideComponent', () => {
  let component: IndexZeInsideComponent;
  let fixture: ComponentFixture<IndexZeInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexZeInsideComponent]
    });
    fixture = TestBed.createComponent(IndexZeInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
