import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { FeedModule } from './components/feed/feed.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AccountModule } from './components/account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFooterModule } from './components/header-footer/header-footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FeedModule,
    HttpClientModule,
    AccountModule,
    AppRoutingModule,
    HeaderFooterModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule, FeedModule, HttpClientModule],
})
export class AppModule {}
