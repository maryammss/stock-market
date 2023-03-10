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

  isMobileDevice = false;
  items$: Stock[] = [];
  constructor(private http: HttpClient, private stockService: StockService) { }

  ngOnInit(): void {
    this.checkIfMobileDevice();
    this.stockService.getStockes().subscribe(stockes => {
      this.items$ = stockes;
    });
  }

  deleteStock(index: number) {
    this.stockService.deleteStocke(index).subscribe(
      (stockes: any) => {
        this.items$ = stockes;
      });
  }

  iconUrl(indicator: number) {
    if (indicator == 0)
      return ''
    return (indicator > 0) ? "../../../assets/images/increase-arrow.png" : "../../../assets/images/decrease-arrow.png";
  }

  checkIfMobileDevice(){
    let navDetail = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    this.isMobileDevice = regexp.test(navDetail);
  }

}

