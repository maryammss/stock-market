import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  
  items$: Stock[] = [];
  constructor(private http: HttpClient, private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getCourses().subscribe(courses => { 
      this.items$ = courses;
    });
  }

  deleteStock(index: number){
    this.stockService.deletecourse(index).subscribe(
      (courses: any) => {
         this.items$ = courses;  
      });
  }
}

