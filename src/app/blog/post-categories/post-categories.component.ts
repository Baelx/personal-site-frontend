import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.css']
})
export class PostCategoriesComponent implements OnInit {

  // This is how you initilize a typescript interface
  public posts: Post[] = [];
  // public categor: string;
  public categoryContext: string;
  private postsSub: Subscription;

  @Input() category: string[];

  constructor(
    // Shorthand for creating a property right in a constructor
    // is to add an access control keyword before it("public", "private", etc.)
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryContext = this.singleOrList();
  }

  singleOrList() {
    if (this.route.routeConfig.component.name === 'PostSingleComponent') {
      this.categoryContext = 'single';
    } else {
      this.categoryContext = 'list';
    }
    return this.categoryContext;
  }
}
