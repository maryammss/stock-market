import {Request, Response} from 'express';
import { STOCKDETAILS } from '../src/stock-db';

export function getStockDetailByStockId(req: Request, res: Response) {

    const stockId = req.params['id'];

    const stockDetails: any = Object.values(STOCKDETAILS);

    const stockDetail = stockDetails.filter((stockDetail: any) => stockDetail.stockId == stockId);

    res.status(200).json(stockDetail);
}
