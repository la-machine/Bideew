import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPodcastComponent } from './index-podcast.component';

describe('IndexPodcastComponent', () => {
  let component: IndexPodcastComponent;
  let fixture: ComponentFixture<IndexPodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPodcastComponent]
    });
    fixture = TestBed.createComponent(IndexPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
