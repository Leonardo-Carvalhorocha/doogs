import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiDogsService } from './../../../services/api-dogs.service';
import { Comments } from './../../model/Comments';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrl: './feed-comment.component.scss',
})
export class FeedCommentComponent implements OnInit, OnDestroy {
  @Input() comments!: Comments[];
  @Input() id: string = ''
  form!: FormGroup;
  unsubscribe!: Subscription;

  constructor(
    private apidogService: ApiDogsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      comments: ['']
    }) 
  }

  enviarComentario() {
    const commentUserValue: string = this.form.controls['comments']?.value;
    const token = window.localStorage.getItem('token');
    if(commentUserValue && this.id && token) {
      if(commentUserValue?.length > 0 && this.id.length > 0) {
        this.unsubscribe = this.apidogService.COMMENT_POST(this.id, commentUserValue).subscribe()
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
