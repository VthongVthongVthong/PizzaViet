
var options = {
    series: [{
        name: 'Doanh thu',
        type: 'column',
        data: [44000000, 50500000, 41400000, 67100000, 22700000, 41300000, 20100000, 35200000, 75200000, 32000000, 25700000, 16000000]
    }, {
        name: 'Lượng khách',
        type: 'line',
        data: [230, 420, 350, 270, 430, 220, 170, 310, 510, 220, 120, 160]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: 'BIỂU ĐỒ THỐNG KÊ',
        style: {
            fontFamily: 'Times New Roman, sans-serif',
            fontSize: '18px',
            fontWeight: 'bold'
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01/01/2024', '01/02/2024', '01/03/2024', '01/04/2024', '01/05/2024', '01/06/2024', '01/07/2024', '01/08/2024', '01/09/2024', '01/10/2024', '01/11/2024', '01/12/2024'],
    yaxis: [{
        title: {
            text: 'Doanh thu',
        style: {
            fontFamily: 'Times New Roman, sans-serif',
            fontSize: '18px',
            fontWeight: 'bold'
        }
        }, labels: {
            formatter: function (value) {
                return value.toLocaleString(); // Định dạng số với dấu phẩy phân cách
            }
        }

    }, {
        opposite: true,
        title: {
            text: 'Lượng khách',
            style: {
                fontFamily: 'Times New Roman, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold'
            }
        }

    }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
      
      
    
