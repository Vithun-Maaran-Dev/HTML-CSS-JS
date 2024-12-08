export default async function getStockprofileDetail() {
     try {
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
     catch {
          alert(`Error occur while fetching data.`);
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
