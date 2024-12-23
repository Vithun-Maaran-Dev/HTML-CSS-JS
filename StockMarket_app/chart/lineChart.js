export async function chartView(stockValueAndTime) {
     const { value, timeStamp } = stockValueAndTime || {};

     if (!value || !timeStamp) {
          console.warn("Invalid data for chart rendering");
          return;
     }

     const chartData = {
          labels: await convertTimestamps(timeStamp), // X-axis labels
          datasets: [
               {
                    label: 'Stock Price',
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

     const ctx = document.getElementById(`stockChart`).getContext('2d');
     window.stockChartInstance = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
               responsive: true,
               plugins: {
                    legend: { position: 'top' },
                    tooltip: {
                         enabled: true,
                         callbacks: {
                              label: (context) => `Price: $${context.raw.toFixed(2)}`
                         }
                    }
               },
               scales: {
                    x: {
                         beginAtZero: false,
                         grid: { display: false }
                    },
                    y: {
                         beginAtZero: true,
                         ticks: {
                              callback: (value) => `$${value.toFixed(2)}`
                         }
                    }
               }
          }
     });
}

function convertTimestamps(timestamps) {
     return timestamps.map(ts => new Date(ts * 1000).toLocaleDateString());
}
