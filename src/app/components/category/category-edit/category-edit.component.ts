import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  text: String;
  categoryEditForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm(){
    this.categoryEditForm = this.form.group({
      name: new FormControl,
      id: new FormControl
    })
  }

  onSubmit() {
    var url = this.router.url;
    var id =  Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    
   this.categoryEditForm.setValue({name: this.text, id: id});
    this.service.editCategory(this.categoryEditForm.value).subscribe(() => this.router.navigate(['/forum/category']));
  }
}
