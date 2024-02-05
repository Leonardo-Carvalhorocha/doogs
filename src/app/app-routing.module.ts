import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed/feed.component';
import { CardFeedComponent } from './components/feed/card-feed/card-feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent, children: [
    { path: ':id', component: CardFeedComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
