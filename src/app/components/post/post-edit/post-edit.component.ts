import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  text: String;
  postEditForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm(){
    this.postEditForm = this.form.group({
      content: new FormControl,
      id: new FormControl
    })
  }

  onSubmit() {
    var url = this.router.url;
    var threadId = Number.parseInt(url.substring(url.lastIndexOf("edit/") + 5, url.lastIndexOf("/")));
    var id =  Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    
   this.postEditForm.setValue({content: this.text, id: id});
    this.service.editPost(this.postEditForm.value).subscribe(() => this.router.navigate(['/forum/post', threadId]));
  }
}
