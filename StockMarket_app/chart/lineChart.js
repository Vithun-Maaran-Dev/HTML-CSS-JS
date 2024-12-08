
const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
     type: 'line', // Chart type
     data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
          datasets: [{
               label: 'Sales Data', // Legend label
               data: [10, 20, 30, 40, 50, 60], // Data points
               borderColor: 'rgba(75, 192, 192, 1)', // Line color
               backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color
               borderWidth: 2, // Line width
               tension: 0.3 // Line smoothness
          }]
     },
     options: {
          responsive: true,
          plugins: {
               legend: {
                    display: true,
                    position: 'top'
               },
               tooltip: {
                    enabled: true
               }
          },
          scales: {
               x: {
                    beginAtZero: true // Start X-axis at zero
               },
               y: {
                    beginAtZero: true // Start Y-axis at zero
               }
          }
     }
});

