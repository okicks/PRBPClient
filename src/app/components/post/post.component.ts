import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Post } from 'src/app/models/Post';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  threadId: Number;
  columnNames = ['content', 'created', 'edited', 'actions'];
  dataSource: MatTableDataSource<Post>;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    var url = this.router.url;
    this.threadId = Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));
    
    this.service.getPosts(this.threadId).subscribe((data: Post[]) => this.dataSource = new MatTableDataSource<Post>(data));
  }

  reply() {
    this.router.navigate(['forum/post/create', this.threadId]);
  }

  edit(postId){
    this.router.navigate(['forum/post/edit', this.threadId, postId]);
  }

  delete(postId){
    this.service.deletePost(postId).subscribe(() => location.reload());
  }

}
