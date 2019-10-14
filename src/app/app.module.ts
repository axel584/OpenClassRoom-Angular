import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/Posts.service';

const appRoutes : Routes = [
  {path:'posts',component:PostListComponent},
  {path:'posts/new',component:NewPostComponent},
  {path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'**',redirectTo:'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
