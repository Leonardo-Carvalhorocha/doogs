import { Component, OnInit } from '@angular/core';
import { ApiDogsService } from '../../../services/api-dogs.service';
import { Photos } from '../../model/Photos';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../model/Comments';
@Component({
  selector: 'app-card-feed',
  templateUrl: './card-feed.component.html',
  styleUrl: './card-feed.component.scss'
})
export class CardFeedComponent implements OnInit {
  id: any;
  photo!: Photos;
  comments!: Comments[];

  constructor(
    private dogsService: ApiDogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.children[0].children[0].params['id'];
    this.dogsService.getPhotoCard(this.id)
    .subscribe((photo: Photos) => {
      this.photo = photo
      this.comments =  Object.values(photo.comments);
      console.log(this.photo);
    })
  }
}
