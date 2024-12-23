
import getStockprofileDetail from "./StockProfileDetails.js";
import getStockChart from "./StockChart.js";

export default async function getStockDatas() {

     try {
          const getStockDatasAPI = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata`);
          const stockDatas = await getStockDatasAPI.json();

          for (let stockData in stockDatas) {
               if (stockData != "message") {
                    stockDatas[stockData].map((datas) => {
                         buildStockView(datas)
                    });
               }
          }
     }
     catch {
          alert(`Error occur while fetching data.`);
     }


}

function buildStockView(datas) {

     const stockNav = document.getElementById('nav');

     for (let data in datas) {
          // Generate stock HTML structure
          if (data != `_id`) {
               const stockHtml = document.createElement('div');
               stockHtml.className = 'stock';
               stockHtml.id = data;

               stockHtml.innerHTML = `
                    <p>${data}</p>
                    <div class='stock-data'>
                         <span>$${(datas[data].bookValue).toFixed(2)}</span>
                         <br />
                         <span class="${datas[data].profit === 0 ? 'prft-red' : 'prft-green'}">
                              ${datas[data].profit.toFixed(2)}%
                              <span class="material-symbols-outlined">
                              ${datas[data].profit === 0 ? 'arrow_downward' : 'arrow_upward'}
                              </span>
                         </span>
                    </div>
               `;

               // Append to the container
               stockNav.appendChild(stockHtml);

               // Add click event listener
               stockHtml.addEventListener('click', () => {
                    const selectedStock = document.getElementById(`seletedStock`);
                    selectedStock.value = data;
                    getStockprofileDetail();
                    getStockChart();
               });
          }
     }
}

