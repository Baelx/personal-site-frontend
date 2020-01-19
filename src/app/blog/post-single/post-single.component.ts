import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// Import Post model TS interface and service
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit, OnDestroy {

  // This is how you initilize a typescript interface
  post = {} as Post;
  private postsSub: Subscription;

  constructor(
    // Shorthand for creating a property right in a constructor
    // is to add an access control keyword before it("public", "private", etc.)
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postsSub = this.postsService.getSingle(id)
    .subscribe(res => {
      res.map(res => {
         this.post.title = res.title;
         this.post.content = res.content;
         this.post.id = this.post.id;
         this.post.summary = res.summary;
         this.post.publishDate = res.publishDate;
      });
    });

  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
