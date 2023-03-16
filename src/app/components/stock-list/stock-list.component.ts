import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  isMobileDevice = false;
  items$: Stock[] = [];
  subscription$: Subscription = new Subscription;
  selectedStock: Stock | undefined;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.checkIfMobileDevice();
    this.subscription$ = this.stockService.getStockes().subscribe(stockes => {
      this.items$ = stockes;
    });
  }

  deleteStock(id: number) {
    this.stockService.deleteStocke(id).subscribe(
      (stockes: any) => {
        this.items$ = stockes;
      });
  }

  iconUrl(indicator: number) {
    if (indicator == 0)
      return ''
    return (indicator > 0) ? "../../../assets/images/increase-arrow.png" :
      "../../../assets/images/decrease-arrow.png";
  }

  checkIfMobileDevice() {
    let navDetail = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    this.isMobileDevice = regexp.test(navDetail);
  }

  showStockDetail(stock: Stock){
    this.selectedStock = stock;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}

