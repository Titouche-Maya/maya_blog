import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post!: Post ;
  postsUrl: string = 'https://blog.anybuddyapp.com/wp-json/wp/v2/posts';

  constructor(private activatedroute:ActivatedRoute)  { 
    
  }


    ngOnInit(): void {
      const postId = this.activatedroute.snapshot.paramMap.get('id');

      fetch(this.postsUrl +'/' + postId )
        .then((response) => response.json())
        .then((post) => (this.post = post));
    }  
}
