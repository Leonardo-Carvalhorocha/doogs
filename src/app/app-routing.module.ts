import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed/feed.component';
import { CardFeedComponent } from './components/feed/card-feed/card-feed.component';
import { LogarPerfilComponent } from './components/account/logar-perfil/logar-perfil.component';
import { PerfilComponent } from './components/account/perfil/perfil.component';
import { AuthService } from './components/guards/auth.service';
import { LoginGuardService } from './components/guards/login-guard.service';

const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    children: [{ path: ':id', component: CardFeedComponent }],
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogarPerfilComponent,
    canActivate: [LoginGuardService],
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
