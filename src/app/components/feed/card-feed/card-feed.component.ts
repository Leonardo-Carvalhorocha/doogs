import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiDogsService } from '../../../services/api-dogs.service';
import { Photos } from '../../model/Photos';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../model/Comments';
import { Observable, Subscription, catchError, tap } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-card-feed',
  templateUrl: './card-feed.component.html',
  styleUrl: './card-feed.component.scss'
})
export class CardFeedComponent implements OnInit, OnDestroy {
  id: any;
  photo!: Photos;
  comments!: Comments[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  unsubscribe!: Subscription;

  constructor(
    private dogsService: ApiDogsService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.children[0].children[0].params['id'];
    this.unsubscribe = this.dogsService.getPhotoCard(this.id)
    .pipe(
      tap((photo: Photos) => {
        this.photo = photo
        this.comments =  Object.values(photo.comments);
      })
    ).subscribe()
  }

  errorSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: this.horizontalPosition,
      duration: 5000,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
