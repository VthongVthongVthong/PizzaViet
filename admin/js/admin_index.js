// chart
var options = {
    series: [{
        name: 'Lượt tìm kiếm',
        data: [3100, 4000, 2800, 5100, 4223, 10449, 10240]
    }, {
        name: 'Lượt truy cập',
        data: [1142, 3214, 4245, 3352, 3464, 5275, 7551]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'date',
        categories: ["22/11/2024", "23/11/2024", "24/11/2024", "25/11/2024", "26/11/2024", "27/11/2024", "28/11/2024"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();