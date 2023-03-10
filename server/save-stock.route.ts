import { Request, Response } from 'express';
import { findStockById } from '../src/stock-db';


export function saveStock(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving Stock", id, JSON.stringify(changes));

    const stock = findStockById(id);

    stock.description = changes.description;

    res.status(200).json(stock);

}
