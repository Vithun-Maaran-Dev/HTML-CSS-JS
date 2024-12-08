import { chartView } from "../chart/lineChart.js";

export default async function getStockChart() {

     const getStockChartAPI = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata`);
     const getStockChartDatas = await getStockChartAPI.json();

     for (let getStockChartData in getStockChartDatas) {
          if (getStockChartData != "message") {
               getStockChartDatas[getStockChartData].map((stockCharts) => {
                    buildStockChart(stockCharts)
               });
          }
     }

}

async function buildStockChart(stockCharts) {

     const selectedStock = document.getElementById(`seletedStock`);
     const period = document.getElementById(`period-drpdwn`).value;

     for (let stockChart in stockCharts) {

          if (stockChart != "_id" && selectedStock.value == stockChart) {

               await chartView(stockCharts[stockChart][period]);
          }
     }
}

