import {Request, Response} from 'express';
import {deleteStockById} from '../src/stock-db';


export function deleteStock(req: Request, res: Response) {

    const index = req.params["id"];

    if (index === -1) return res.status(404).json({})

    const stockes = deleteStockById(index);

    res.status(200).json(stockes);

}
