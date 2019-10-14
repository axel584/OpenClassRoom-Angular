import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../Post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/Posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts : Post[];
  postsSubscription:Subscription;


  constructor(private postsService:PostsService,private router : Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts:Post[])=> {
        this.posts=posts;
        console.log("nb de posts:"+posts.length)
      }
    );
    this.postsService.emitPosts();
  }

  onDeletePost(post:Post) {
    this.postsService.removePost(post);
  }

  
  onLove(post:Post) {
    this.postsService.love(post);
  }

  onDontLove(post:Post) {
    this.postsService.hate(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
