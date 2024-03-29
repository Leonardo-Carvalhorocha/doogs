import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed/feed.component';
import { CardFeedComponent } from './components/feed/card-feed/card-feed.component';
import { LogarPerfilComponent } from './components/account/logar-perfil/logar-perfil.component';
import { PerfilUserComponent } from './components/user/perfil-user/perfil-user.component';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    children: [{ path: ':id', component: CardFeedComponent }],
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  { path: 'login', component: LogarPerfilComponent }, 
  { path: 'perfil', component: PerfilUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
