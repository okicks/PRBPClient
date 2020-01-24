import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Thread } from 'src/app/models/Thread';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  categoryId: Number;
  columnNames = ['name', 'created'];
  dataSource: MatTableDataSource<Thread>;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    var url = this.router.url;
    this.categoryId = Number.parseInt(url.substring(url.lastIndexOf("/") + 1, url.length));

    this.service.getThreads(this.categoryId).subscribe((data: Thread[]) => this.dataSource = new MatTableDataSource<Thread>(data));
  }

}
