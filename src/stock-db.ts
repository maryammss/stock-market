
export var STOCKES: any = [

    {
        id: 1,
        name: "NYR",
        purchasePrice: 23566,
        currentPrice: 64646,
        indicator: 174
    },
    {
        id: 2,
        name: "RxJ",
        purchasePrice: 1200,
        currentPrice: 1200,
        indicator: 0
    },

    {
        id: 3,
        name: 'NgRx',
        purchasePrice: 34567,
        currentPrice: 34557,
        indicator: 0
    },

    {
        id: 4,
        name: "BSAR",
        purchasePrice: 730,
        currentPrice: 865,
        indicator: 18
    },
    {
        id: 5,
        name: 'DER',
        purchasePrice: 790,
        currentPrice: 834,
        indicator: 5
    },
    {
        id: 6,
        name: 'PWA',
        purchasePrice: 1567,
        currentPrice: 1487,
        indicator: - 5
     
    },
    {
        id: 7,
        name: 'GER',
        purchasePrice: 267,
        currentPrice: 287,
        indicator: 7
    },
    {
        id: 8,
        name: 'CTZ',
        purchasePrice: 536,
        currentPrice: 346,
        indicator: -35
    },
    {
        id: 9,
        name: 'AFDE',
        purchasePrice: 309,
        currentPrice: 385,
        indicator: 24
    },
    {
        id: 10,
        name: "AMKS",
        purchasePrice: 1324,
        currentPrice: 1325,
        indicator: 0
    }

];


export function findStockById(stockId:any) {
    return STOCKES.find((stock: any)  => stock.id == stockId);
}

export function deleteStockById(StockIndex: any) {
    STOCKES.splice(StockIndex, 1)
    return STOCKES;
}
