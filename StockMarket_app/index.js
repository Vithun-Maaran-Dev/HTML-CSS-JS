
import getStockDatas from "./Modules/stockData.js";
import getStockprofileDetail from "./Modules/StockProfileDetails.js";
import getStockChart from "./Modules/StockChart.js";


const selectedStock = document.getElementById(`seletedStock`);
selectedStock.value = `AAPL`;

const selectedPeriod = document.getElementById(`period-drpdwn`);

selectedPeriod.addEventListener('change', getStockChart)


getStockDatas();
getStockprofileDetail();
getStockChart();

