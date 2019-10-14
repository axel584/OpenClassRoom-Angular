import { Injectable } from '@angular/core';
import {Post} from '../post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase/app';
import { reject } from 'q';

@Injectable()
export class PostsService {

    private posts : Post[] = [
        new Post('Mon Premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Post('Mon Deuxième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Post('Mon Troisième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      ];
    postsSubject= new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
      }
    
    
    
      getSinglePost(id:number) {
        return new Promise(
          (resolve,reject) => {
            firebase.database().ref('/posts/'+id)
              .once('value').then(
                (data)=>{
                  resolve(data.val());
                },(error)=>{
                  reject(error);
                }
              );
          }
        );
      }
    
      createNewPost(newPost:Post) {
        this.posts.push(newPost);
      }
    
      love(post:Post) {
        post.loveIts++;
      }

      hate(post:Post) {
        post.loveIts--;
      }

      removePost(post:Post) {
        const postIndexToRemove = this.posts.findIndex(
          (postEl)=>{
            if (postEl===post) {
              return true;
            }
          }
        );
        this.posts.splice(postIndexToRemove,1) ;
      }
}