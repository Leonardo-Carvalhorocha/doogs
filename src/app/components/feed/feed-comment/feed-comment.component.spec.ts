import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCommentComponent } from './feed-comment.component';

describe('FeedCommentComponent', () => {
  let component: FeedCommentComponent;
  let fixture: ComponentFixture<FeedCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
