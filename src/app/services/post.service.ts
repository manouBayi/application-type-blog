import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {

  postsSubject = new Subject<Post[]>();

  private posts = [];

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(post: Post) {
    post.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  delete(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveIt(post: Post) {
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }
}
