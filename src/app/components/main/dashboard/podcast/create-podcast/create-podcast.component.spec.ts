import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePodcastComponent } from './create-podcast.component';

describe('CreatePodcastComponent', () => {
  let component: CreatePodcastComponent;
  let fixture: ComponentFixture<CreatePodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePodcastComponent]
    });
    fixture = TestBed.createComponent(CreatePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
