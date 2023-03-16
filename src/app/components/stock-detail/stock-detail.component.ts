import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Subscription } from 'rxjs';
import { StockDetail } from 'src/app/models/stock-detail';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit, OnChanges {

  @Input()
  stock: Stock | undefined;

  @Input()
  isMobileDevice = false;

  details$: StockDetail[] = [];
  subscription$: Subscription = new Subscription;

  constructor(private stockService: StockService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.stock)
      this.subscription$ = this.stockService.getStockDetails(this.stock.id).subscribe(stockDetails => {
        this.details$ = stockDetails;
      });
  }

  ngOnInit(): void {
  }

  showTable(): boolean{
    return this.details$?.length > 0;
  }

}
