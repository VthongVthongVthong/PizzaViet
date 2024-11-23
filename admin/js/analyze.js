var options = {
    series: [{
        name: 'Doanh thu',
        type: 'column',
        data: [50500000, 41400000, 67100000, 22700000, 41300000, 20100000, 35200000, 75200000, 32000000, 25700000, 16000000]
    }, {
        name: 'Lượng khách',
        type: 'line',
        data: [420, 350, 430, 270, 220, 170, 310, 510, 220, 120, 160]
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
    labels: ['Tháng 11/2023 ', 'Tháng 12/2023 ', 'Tháng 1/2024 ', 'Tháng 2/2024', 'Tháng 3/2024', 'Tháng 4/2024', 'Tháng 5/2024', 'Tháng 6/2024', 'Tháng 7/2024', 'Tháng 8/2024', 'Tháng 9/2024'],
    yaxis: [{
        title: {
            text: 'Doanh thu',
            style: {
                fontFamily: 'Times New Roman, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold'
            }
        },
        labels: {
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

window.onload = function () {
    // Tính tổng tiền thu được trong Analyze_Table
    var totalRevenue = 0;
    var revenueCells = document.querySelectorAll('#Analyze_Table tbody tr td:nth-child(5)');
    revenueCells.forEach(function (cell) {
        var value = parseFloat(cell.textContent.replace(/\./g, '').replace('₫', '').trim()); // Loại bỏ dấu phẩy nếu có
        totalRevenue += value;
    });

    // Hiển thị tổng tiền thu được
    document.getElementById('totalRevenue').textContent = totalRevenue.toLocaleString();

    // Tính tổng chi trong Analyze_Table_Customer
    var totalExpense = 0;
    var expenseCells = document.querySelectorAll('#Analyze_Table_Customer tbody tr td:nth-child(5)');
    expenseCells.forEach(function (cell) {
        var value = parseFloat(cell.textContent.replace(/\./g, '').replace('₫', '').trim()); // Loại bỏ dấu phẩy nếu có
        totalExpense += value;
    });

    // Hiển thị tổng chi
    document.getElementById('totalExpense').textContent = totalExpense.toLocaleString();
};

function resetOtherSortOptions(exceptId) {
    const sortOptions = ['sortOrder', 'sortID', 'sortOrderKH', 'sortIDKH', 'sortOrderKHTop5'];
    sortOptions.forEach(id => {
        if (id !== exceptId) {
            document.getElementById(id).value = 'neutral';
        }
    });
}
// Hàm sắp xếp bảng
function sortTable() {
    const table = document.getElementById("Analyze_Table");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)")); // Loại bỏ hàng tổng
    const sortOrder = document.getElementById("sortOrder").value;

    if (sortOrder === 'neutral') return;

    resetOtherSortOptions('sortOrder');

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.cells[3].innerText) || 0; // Sắp xếp theo cột "Số lượng bán ra"
        const valueB = parseInt(rowB.cells[3].innerText) || 0;

        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });

    const tbody = table.querySelector("tbody");
    rows.forEach(row => tbody.insertBefore(row, tbody.querySelector(".total-row"))); // Thêm lại hàng đã sắp xếp
}

function sortTableID() {
    const table = document.getElementById("Analyze_Table");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)")); // Loại bỏ hàng tổng
    const sortOrder = document.getElementById("sortID").value;

    if (sortOrder === 'neutral') return;

    resetOtherSortOptions('sortID');

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.cells[0].innerText) || 0; // Sắp xếp theo cột "Số lượng bán ra"
        const valueB = parseInt(rowB.cells[0].innerText) || 0;

        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });

    const tbody = table.querySelector("tbody");
    rows.forEach(row => tbody.insertBefore(row, tbody.querySelector(".total-row"))); // Thêm lại hàng đã sắp xếp
}

// Khách hàng
function sortTableKH() {
    const table = document.getElementById("Analyze_Table_Customer");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)")); // Loại bỏ hàng tổng
    const sortOrder = document.getElementById("sortOrderKH").value;

    if (sortOrder === 'neutral') return;

    resetOtherSortOptions('sortOrderKH');

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.cells[3].innerText) || 0; // Sắp xếp theo cột "Số lượng bán ra"
        const valueB = parseInt(rowB.cells[3].innerText) || 0;

        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });

    const tbody = table.querySelector("tbody");
    rows.forEach(row => tbody.insertBefore(row, tbody.querySelector(".total-row"))); // Thêm lại hàng đã sắp xếp
}

function sortTableKHDesc() {
    const table = document.getElementById("Analyze_Table_Customer");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)")); // Loại bỏ hàng tổng
    const sortOrder = document.getElementById("sortOrderKHTop5").value;

    if (sortOrder === 'neutral') return;

    resetOtherSortOptions('sortOrderKHTop5');

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.cells[4].innerText.replace(/\./g, '').replace('₫', '').trim()) || 0; // Sắp xếp theo cột "Số lượng bán ra"
        const valueB = parseInt(rowB.cells[4].innerText.replace(/\./g, '').replace('₫', '').trim()) || 0;

        return sortOrder === "desc" ? valueB - valueA : valueA - valueB;
    });

    const tbody = table.querySelector("tbody");
    rows.forEach(row => tbody.insertBefore(row, tbody.querySelector(".total-row"))); // Thêm lại hàng đã sắp xếp
}

function sortTableIDKH() {
    const table = document.getElementById("Analyze_Table_Customer");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)")); // Loại bỏ hàng tổng
    const sortOrder = document.getElementById("sortIDKH").value;

    if (sortOrder === 'neutral') return;

    resetOtherSortOptions('sortIDKH');

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.cells[0].innerText) || 0;
        const valueB = parseInt(rowB.cells[0].innerText) || 0;

        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });

    const tbody = table.querySelector("tbody");
    rows.forEach(row => tbody.insertBefore(row, tbody.querySelector(".total-row"))); // Thêm lại hàng đã sắp xếp
}

function showTop5() {
    // Sort the table based on sales quantity
    sortTableKHDesc();

    const table = document.getElementById("Analyze_Table_Customer");
    const rows = Array.from(table.querySelectorAll("tbody tr:not(.total-row)"));
    const button = document.getElementById("top5Button");
    // Hide rows beyond the first 5
    if (button.textContent === "Hiển thị Top 5") {
        rows.forEach((row, index) => {
            if (index >= 5) {
                row.style.display = 'none';  // Hide extra rows
            } else {
                row.style.display = '';  // Show the top 5 rows
            }
        });
        button.textContent = "Hiển thị tất cả"; // Change button text to "Hiển thị tất cả"

        // Recalculate total expense based on the first 5 rows
        let totalExpense = 0;
        for (let i = 0; i < 5; i++) {
            const row = rows[i];
            const revenueCell = row.cells[4]; // Column 5 contains revenue
            const revenue = parseFloat(revenueCell.textContent.replace(/\./g, '').replace('₫', '').trim());
            totalExpense += revenue;
        }
        // Display the total expense for the top 5
        document.getElementById('totalExpense').textContent = totalExpense.toLocaleString() ;
    } else {
        // Show all rows when button is in "Hiển thị tất cả" state
        rows.forEach(row => {
            row.style.display = ''; // Show all rows
        });

        // Recalculate total expense for all rows
        updateTotalExpense();
        button.textContent = "Hiển thị Top 5";
    }
}

function updateTotalExpense() {
    var total = 0;
    var rows = document.querySelectorAll('#Analyze_Table_Customer tr');
    rows.forEach(function (row) {
        var expenseCell = row.cells[4]; // Giả sử cột chi phí là cột thứ 5 (index 4)
        if (expenseCell) {
            var expense = parseFloat(expenseCell.innerText.replace('₫', '').replace(/\./g, '').replace(',', '').trim());
            if (!isNaN(expense)) {
                total += expense;
            }
        }
    });
    document.getElementById('totalExpense').innerText = total.toLocaleString() ; // Cập nhật phần tử totalExpense
}