import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  text: String;
  postCreateForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.postCreateForm = this.form.group({
      content: new FormControl,
      threadId: new FormControl
    })
  }

  onSubmit() {
    var url = this.router.url;
    var id =  Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    
   this.postCreateForm.setValue({content: this.text, threadId: id});
    this.service.createPost(this.postCreateForm.value).subscribe(() => this.router.navigate(['']));
  }

}
