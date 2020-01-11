import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { summaryFileName } from '@angular/compiler/src/aot/util';

/**
 *  Angular Injectable decorator which allows Angular to find this service and inject it as a provider
 *  The option providedIn: 'root' makes sure you only have one instance of this service throughout your app
 *
 */
@Injectable({providedIn: 'root'})
export class PostsService {

  private post: Post;
  // An empty array. Type should be an array of Post interfaces(from the model file)
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  /**
   * Just a regular constructor function. Assigns the HTTPClient Class to http variable.
   * The private keyword(as well as other class visibility keywords), when passed as an argument
   * to the constructor function, will automatically create an http property for use in your PostsService
   * class.
   * @param http Of type HTTPClient.
   */
  constructor(private http: HttpClient) {}

  getPosts() {
    // Unsubscribe from this observable will be handled automatically by the httpclientmodule
    this.http.get<any>('http://localhost:3000/api/posts')
    .pipe(map(postDataResponse => {
      console.dir(postDataResponse);

      return postDataResponse.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id,
          summary: post.summary,
          categories: post.categories
        };
      });
    }))
    .subscribe((transformedPosts) => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getSingle(postId: string) {
    // This function should return something
    return this.http.get<any>(`http://localhost:3000/api/posts/${postId}`);
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string, summary: string, categories: string[]) {
    const post: Post = {id: null, title: title, content: content, summary: summary, categories: categories};
    this.http
      .post<{ message: string, postId: string }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http.delete(`http://localhost:3000/api/posts/${postId}`)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
    }
}
