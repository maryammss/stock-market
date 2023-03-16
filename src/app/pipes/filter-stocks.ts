import { Pipe, PipeTransform } from "@angular/core";
import { Stock } from "../models/stock";

@Pipe({
    name: 'filterStocks',
})

export class filterStocksPipe implements PipeTransform{
    transform(stocks: Stock[], isProfitable: boolean) {
        return stocks.filter(
            stock => isProfitable? (stock.indicator > 0) : (stock.indicator < 0));
    }

}