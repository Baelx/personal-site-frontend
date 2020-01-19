import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.css']
})
export class PostCategoriesComponent implements OnInit, OnDestroy {

  // This is how you initilize a typescript interface
  public posts: Post[] = [];
  public category: string;
  public categoryContext: string;
  private postsSub: Subscription;

  constructor(
    // Shorthand for creating a property right in a constructor
    // is to add an access control keyword before it("public", "private", etc.)
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.singleOrList() === 'single') {
      this.getCategory();
    } else {
      this.getCategories();
    }
  }

  getCategory() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postsSub = this.postsService.getSingle(id)
    .subscribe(res => {
      res.map(res => {
         this.category = res.categories;
      });
    });
  }

  getCategories() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  private singleOrList() {
    if(this.route.snapshot.component.name === 'PostSingleComponent') {
      this.categoryContext = 'single';
    } else {
      this.categoryContext = 'list';
    }
    return this.categoryContext;
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
