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
export class PostSingleComponent implements OnInit {

  // This is how you initilize a typescript interface
  post = {} as Post;
  private postsSub: Subscription;

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postsService.getSingle(id)
    .subscribe(res => {
      res.map(res => {
         this.post.title = res.title;
         this.post.content = res.content;
         this.post.id = this.post.id;
      });
    });


  // onDelete(postId: string) {
  //   this.postsService.deletePost(postId);
  // }

  // ngOnDestroy() {
  //   this.postsSub.unsubscribe();
  // }
  }
}
