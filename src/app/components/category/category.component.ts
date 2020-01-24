import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/Category';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  columnNames = ['name'];
  dataSource: MatTableDataSource<Category>;

  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((data: Category[]) => this.dataSource = new MatTableDataSource<Category>(data));
  }

}
