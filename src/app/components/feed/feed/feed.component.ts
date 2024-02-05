import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ApiDogsService } from '../../../services/api-dogs.service';
import { Feed } from '../../model/Feed';
import { Unsubscribable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CardFeedComponent } from '../card-feed/card-feed.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit, OnDestroy {
  photosCardFeed!: Feed[];
  listDogs!: Unsubscribable;
  id: string = '';

  constructor(
    private dogsService: ApiDogsService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.listDogs = this.dogsService.getFeedList()
    .subscribe((cardFeed: Feed[]) =>  this.photosCardFeed = cardFeed);
  }

  handleClick() {
    this.dialog.open(CardFeedComponent);
  }

  ngOnDestroy(): void {
    this.listDogs.unsubscribe();
  }
}
