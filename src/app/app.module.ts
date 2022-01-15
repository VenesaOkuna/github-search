import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
