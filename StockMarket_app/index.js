
const selectedStock = document.getElementById(`seletedStock`);
selectedStock.value = `AAPL`;

const selectedPeriod = document.getElementById(`period-drpdwn`);

selectedPeriod.addEventListener('change', getStockChart)


getStockDatas();
getStockprofileDetail();
getStockChart();


async function getStockDatas() {

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


async function getStockprofileDetail() {
     const getStockprofileDetailAPI = await fetch(`https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata`);
     const getStockprofileDetails = await getStockprofileDetailAPI.json();

     for (let getStockprofileDetail in getStockprofileDetails) {

          if (getStockprofileDetail != "message") {
               getStockprofileDetails[getStockprofileDetail].map((stockProfiles) => {
                    buildStockProfileView(stockProfiles)
               });
          }
     }
}

function buildStockProfileView(stockProfiles) {

     const stockDetail = document.getElementById('stock-detail');
     const selectedStock = document.getElementById(`seletedStock`);

     for (let stockProfile in stockProfiles) {

          if (stockProfile != `_id` && selectedStock.value == stockProfile) {

               const stockProfileHTML = `
                    <dl>
                         <dt>${stockProfile}</dt>
                         <dd>
                            ${stockProfiles[stockProfile].summary}
                         </dd>
                    </dl>

               `
               stockDetail.innerHTML = stockProfileHTML
          }
     }
}

async function getStockChart() {

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

function convertTimestamps(timestamps) {
     return timestamps.map(ts => new Date(ts * 1000).toLocaleDateString());
}

async function chartView(stockValueAndTime) {

     const { value, timeStamp } = stockValueAndTime || {};

     const chartData = {
          labels: await convertTimestamps(timeStamp), // X-axis labels
          datasets: [
               {
                    label: 'Data',
                    data: value,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    tension: 0.4
               },
          ]
     };

     if (window.stockChartInstance) {
          window.stockChartInstance.destroy();
     }

     // Render the chart
     const ctx = document.getElementById(`stockChart`).getContext('2d');
     window.stockChartInstance = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
               responsive: true,
               plugins: {
                    legend: { position: 'top' },
                    tooltip: { enabled: true }
               },
               scales: {
                    x: { beginAtZero: false },
                    y: { beginAtZero: true }
               }
          }
     });

}