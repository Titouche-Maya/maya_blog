import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';

// const fakeData: Post[] = [
//   {
//     id: "1",
//     date: new Date(),
//     title: "title 1"
//   },
//   {
//     id: "2",
//     date: new Date(),
//     title: "title 2"
//   }
// ];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  postsUrl: string = 'https://blog.anybuddyapp.com/wp-json/wp/v2/posts';

  constructor() { }

    ngOnInit(): void {
      fetch(this.postsUrl)
        .then((response) => response.json())
        .then((posts) => (this.posts = posts));
   //   this.posts = fakeData;
    }    

  

  postClick(postId: string) {
  //  this.router.navigateByUrl('/');
  }


}
