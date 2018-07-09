var ctx = document.getElementById("lineChart").getContext("2d");
ctx.canvas.width = 20;
ctx.canvas.height = 20;
console.log(ctx);

let lineChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 5, 5, 5],
        }]
    },

    options: {}
});
