import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()
  post : Post;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.post.loveIts++;
    console.log("love : "+this.post.loveIts);
  }

  onDontLove() {
    this.post.loveIts--;
    console.log("don't love : "+this.post.loveIts);
  }

}
