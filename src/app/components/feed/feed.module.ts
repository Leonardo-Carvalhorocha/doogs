import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SharedModule } from '../shared/shared.module';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FeedCommentComponent } from './feed-comment/feed-comment.component';

@NgModule({
  declarations: [
    FeedComponent,
    CardFeedComponent,
    FeedCommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    FeedComponent,
    CardFeedComponent
  ]
})
export class FeedModule { }
