import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { ReposComponent } from './repos/repos.component';
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroimageComponent } from './heroimage/heroimage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NavigationComponent,
    UserRepoComponent,
    FooterComponent,
    NavbarComponent,
    HeroimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
