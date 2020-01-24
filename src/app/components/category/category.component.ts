import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/Category';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  columnNames = ['name', 'actions'];
  dataSource: MatTableDataSource<Category>;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((data: Category[]) => this.dataSource = new MatTableDataSource<Category>(data));
  }

  create() {
    this.router.navigate(['/forum/category/create']);
  }

  edit(categoryId){
    this.router.navigate(['/forum/category/edit', categoryId]);
  }

  delete(categoryId){
    this.service.deleteCategory(categoryId).subscribe(() => location.reload());
  }
}
