
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



export var STOCKDETAILS: any = [
    {
        id: 1,
        stockId: 2,
        shareCounts: 5,
        purchaseDate: '08/10/2022',
        purchasePrice: 156,
        currentPrice: 166,
        profit: 10
    },
    {
        id: 2,
        stockId: 2,
        shareCounts: 8,
        purchaseDate: '05/05/2022',
        purchasePrice: 146,
        currentPrice: 166,
        profit: 20
    },
    {
        id: 3,
        stockId: 2,
        shareCounts: 4,
        purchaseDate: '30/11/2022',
        purchasePrice: 180,
        currentPrice: 166,
        profit: -14
    },
    {
        id: 4,
        stockId: 3,
        shareCounts: 8,
        purchaseDate: '30/07/2022',
        purchasePrice: 34457,
        currentPrice: 34557,
        profit: 800
    },
    {
        id: 5,
        stockId: 3,
        shareCounts: 3,
        purchaseDate: '30/09/2022',
        purchasePrice: 34657,
        currentPrice: 34557,
        profit: -65
    },
    {
        id: 6,
        stockId: 4,
        shareCounts: 1,
        purchaseDate: '12/07/2022',
        purchasePrice: 883,
        currentPrice: 865,
        profit: 18
    },
    {
        id: 7,
        stockId: 1,
        shareCounts: 2,
        purchaseDate: '08/05/2022',
        purchasePrice: 64196,
        currentPrice: 64646,
        profit: 24
    },
    {
        id: 8,
        stockId: 1,
        shareCounts: 28,
        purchaseDate: '18/03/2021',
        purchasePrice: 64100,
        currentPrice: 64646,
        profit: 2400
    }
];


export function findDetailByStockId(stockId:any) {
    return STOCKDETAILS.find((stockDetail: any)  => stockDetail.stockId == stockId);
}

export function deleteStockById(StockId: any) {
    var indexToDelete = STOCKES.findIndex((stock: any)  => stock.id == StockId);
    STOCKES.splice(indexToDelete,1);
    return STOCKES;
}

export function findStockById(stockId:any) {
    return STOCKES.find((stock: any)  => stock.id == stockId);
}