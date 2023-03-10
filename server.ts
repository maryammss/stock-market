import * as express from 'express';
import { Application } from "express";
import { getAllStocks } from './server/get-stockes.route';
import { saveStock } from './server/save-stock.route';
import { deleteStock } from './server/delete-stock.route';
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/stockes').get(getAllStocks);

app.route('/api/stockes/:id').put(saveStock);

app.route('/api/stockes/:id').delete(deleteStock);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:9000");
});