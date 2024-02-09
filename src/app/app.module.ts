import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { FeedModule } from './components/feed/feed.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './components/account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { PerfilUserComponent } from './components/user/perfil-user/perfil-user.component';

@NgModule({
  declarations: [AppComponent, PerfilUserComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FeedModule,
    HttpClientModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [SharedModule, FeedModule, HttpClientModule],
})
export class AppModule {}
