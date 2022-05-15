import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listPosts:any;
  post!:Post;

  constructor(private postsService : PostService ) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.post = {
      idPost:null,
      title:null,
      description:null,
      postDate:null,
      image:null,
    }
  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe(res =>this.listPosts = res)
  }

}

