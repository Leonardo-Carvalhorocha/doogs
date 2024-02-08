import { Comments } from './../../model/Comments';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrl: './feed-comment.component.scss',
})
export class FeedCommentComponent implements OnInit {
  @Input() comments!: Comments[];

  constructor() {}

  ngOnInit() {
  }
}
