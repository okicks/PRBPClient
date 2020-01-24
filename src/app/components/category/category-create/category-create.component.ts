import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryCreateForm: FormGroup;

  constructor(private form: FormBuilder, private service: MainService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.categoryCreateForm = this.form.group({
      name: new FormControl
    })
  }

  onSubmit() {
    this.service.createCategory(this.categoryCreateForm.value).subscribe(() => this.router.navigate(['/forum/category']));
  }
}
