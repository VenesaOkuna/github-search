import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubProfileCardComponent } from './github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { UsersComponent } from './users/users.component';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { ReposComponent } from './repos/repos.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent,
    UsersComponent,
    UserRepoComponent,
    ReposComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
