import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileService } from './profile.service';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'profile',component:ProfileComponent},
      {path:'search',component:SearchComponent},


      
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
