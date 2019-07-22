import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponentItemComponent} from './post-list-component-item.component';

describe('PostListComponentItemComponent', () => {
  let component: PostListComponentItemComponent;
  let fixture: ComponentFixture<PostListComponentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponentItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
