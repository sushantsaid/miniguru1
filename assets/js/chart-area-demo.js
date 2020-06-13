var ctx = document.getElementById("myAreaChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"],
datasets: [{
label: '# of Days',
data: [12, 14, 3, 5, 2, 3],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 2
}]
},
options: { responsive: true,maintainAspectRatio:false,
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
