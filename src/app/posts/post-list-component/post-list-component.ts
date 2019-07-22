import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts;
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}

