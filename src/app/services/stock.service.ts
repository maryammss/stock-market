import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stock';
import { StockDetail } from '../models/stock-detail';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) { }

  getStockes(): Observable<Stock[]> {
    return this.http.get<Stock[]>('http://localhost:9000/api/stockes');
  }

  updatestocke(stock: Stock) {
    return this.http.put('/api/stockes/' + stock.id, stock);
  }

  updateStockesWithExtraHeaderPrams(stock: Stock) {
    let myHeader = new HttpHeaders().set("X-Auth", "userId");
    return this.http.put('/api/stockes/' + stock.id, stock, { headers: myHeader });
  }

  deleteStocke(id: number) {
    return this.http.delete('http://localhost:9000/api/stockes/' + id);
  }

  
  getStockDetails(stockId: number): Observable<StockDetail[]> {
    return this.http.get<StockDetail[]>('http://localhost:9000/api/details/' + stockId);
  }

}