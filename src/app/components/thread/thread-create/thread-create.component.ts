import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.css']
})
export class ThreadCreateComponent implements OnInit {

  text: String;
  threadCreateForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.threadCreateForm = this.form.group({
      name: new FormControl,
      categoryId: new FormControl
    })
  }

  onSubmit() {
    var url = this.router.url;
    var id =  Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    
   this.threadCreateForm.setValue({name: this.text, categoryId: id});
    this.service.createThread(this.threadCreateForm.value).subscribe(() => this.router.navigate(['/forum/thread', id]));
  }
}
