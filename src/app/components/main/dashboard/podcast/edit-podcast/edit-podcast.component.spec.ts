import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPodcastComponent } from './edit-podcast.component';

describe('EditPodcastComponent', () => {
  let component: EditPodcastComponent;
  let fixture: ComponentFixture<EditPodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPodcastComponent]
    });
    fixture = TestBed.createComponent(EditPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
