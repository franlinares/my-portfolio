import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardsComponent } from './video-cards.component';

describe('VideoCardsComponent', () => {
  let component: VideoCardsComponent;
  let fixture: ComponentFixture<VideoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
