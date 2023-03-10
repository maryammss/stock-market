import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stock';

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

  deleteStocke(index: number) {
    return this.http.delete('http://localhost:9000/api/stockes/' + index);
  }

}