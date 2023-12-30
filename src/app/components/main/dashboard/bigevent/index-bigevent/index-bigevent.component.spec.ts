import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBigeventComponent } from './index-bigevent.component';

describe('IndexBigeventComponent', () => {
  let component: IndexBigeventComponent;
  let fixture: ComponentFixture<IndexBigeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexBigeventComponent]
    });
    fixture = TestBed.createComponent(IndexBigeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
