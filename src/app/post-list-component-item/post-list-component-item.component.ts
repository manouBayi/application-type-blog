import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-component-item',
  templateUrl: './post-list-component-item.component.html',
  styleUrls: ['./post-list-component-item.component.scss']
})
export class PostListComponentItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
  }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.loveIts--;
  }

  onLoveIt() {
    this.loveIts++;
  }
}
