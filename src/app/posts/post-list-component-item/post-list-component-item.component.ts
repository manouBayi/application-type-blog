import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';


@Component({
  selector: 'app-post-component-item',
  templateUrl: './post-list-component-item.component.html',
  styleUrls: ['./post-list-component-item.component.scss']
})
export class PostListComponentItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.post);
  }

  onLoveIt() {
    this.postService.loveIt(this.post);
  }

  onDelete() {
    this.postService.delete(this.post);
  }
}
