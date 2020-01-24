import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-thread-edit',
  templateUrl: './thread-edit.component.html',
  styleUrls: ['./thread-edit.component.css']
})
export class ThreadEditComponent implements OnInit {

  text: String;
  threadEditForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm(){
    this.threadEditForm = this.form.group({
      name: new FormControl,
      id: new FormControl
    })
  }

  onSubmit() {
    var url = this.router.url;
    var categoryId = Number.parseInt(url.substring(url.lastIndexOf("edit/") + 5, url.lastIndexOf("/")));
    var id =  Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    
   this.threadEditForm.setValue({name: this.text, id: id});
    this.service.editThread(this.threadEditForm.value).subscribe(() => this.router.navigate(['/forum/thread', categoryId]));
  }
}
