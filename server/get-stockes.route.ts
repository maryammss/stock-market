import {Request, Response} from 'express';
import { STOCKES } from '../src/stock-db';


export function getAllStocks(req: Request, res: Response) {
    res.status(200).json(Object.values(STOCKES));
}


export function getStockById(req: Request, res: Response) {

    const stockId = req.params['id'];

    const stockes: any = Object.values(STOCKES);

    const stock = stockes.find((stock: any) => stock.id == stockId);

    res.status(200).json(stock);
}
