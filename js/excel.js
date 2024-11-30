// Hàm xuất Excel
function exportToExcel() {
    // Lấy bảng đơn hàng
    const table = document.querySelector(".table_order table");

    // Chuyển đổi bảng HTML sang định dạng worksheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Danh sách đơn hàng" });

    // Xuất file Excel
    XLSX.writeFile(wb, "Danh_sach_don_hang.xlsx");
}

// Gắn sự kiện click vào nút Xuất Excel
document.querySelector(".excel").addEventListener("click", exportToExcel);

// Hàm xóa tất cả các hàng trong bảng
function deleteAllRows() {
    // Hiển thị hộp thoại xác nhận
    if (confirm("Bạn có chắc chắn muốn xóa tất cả không?")) {
        // Lấy phần tử tbody của bảng
        const tableBody = document.querySelector(".table_order table tbody");

        // Xóa tất cả các hàng trong tbody
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }

        alert("Tất cả các hàng đã bị xóa!");
    } else {
        alert("Hành động đã bị hủy.");
    }
}


// Trỏ đến nút "Xóa tất cả" bằng đường dẫn cụ thể và gắn sự kiện click
document.querySelector("body > div.content > div.infor_order > div.mid_content > div > button.delete")
    .addEventListener("click", deleteAllRows);

    function parseDate(dateStr) {
        // Tách ngày, tháng, năm từ định dạng dd/mm/yyyy
        const [day, month, year] = dateStr.split("/").map(Number);
        
        // Tạo đối tượng Date theo định dạng mm/dd/yyyy (JavaScript sử dụng múi giờ UTC)
        const date = new Date(Date.UTC(year, month - 1, day)); // Sử dụng UTC để tránh vấn đề múi giờ
    
        return date;
    }
    
/*
    function filterAndSortOrders() {
        // Lấy giá trị từ các trường ngày
        const fromDateValue = document.getElementById("fromDate").value;
        const toDateValue = document.getElementById("toDate").value;
    
        // Chuyển đổi thành đối tượng Date để so sánh
        const fromDate = fromDateValue ? new Date(fromDateValue) : null;
        const toDate = toDateValue ? new Date(toDateValue) : null;
    
        // Lấy tất cả các hàng trong bảng
        const rows = Array.from(document.querySelectorAll(".table_order table tbody tr"));
    
        // Lọc các hàng dựa trên khoảng thời gian
        const filteredRows = rows.filter(row => {
            const dateCell = row.cells[3]; // Cột ngày
            const [_, date] = dateCell.innerText.split("\n").map(str => str.trim());
            const rowDate = parseDate(date);
    
            if (fromDate && rowDate < fromDate) return false;
            if (toDate && rowDate > toDate) return false;
            return true;
        });
    
        // Cập nhật lại bảng: Xóa các hàng cũ
        const tableBody = document.querySelector(".table_order table tbody");
        tableBody.innerHTML = ""; // Xóa các hàng cũ
    
        // Nếu không có hàng nào sau khi lọc, hiển thị thông báo
        if (filteredRows.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='4'>Không có đơn hàng phù hợp với khoảng thời gian này.</td></tr>";
            return; // Dừng lại để không thêm các hàng vào bảng
        }
    
        // Sắp xếp các hàng theo ngày tăng dần
        filteredRows.sort((rowA, rowB) => {
            const dateA = parseDate(rowA.cells[3].innerText.split("\n")[1].trim());
            const dateB = parseDate(rowB.cells[3].innerText.split("\n")[1].trim());
            return dateA - dateB; // So sánh ngày theo thứ tự tăng dần
        });
    
        // Thêm các hàng đã lọc và sắp xếp vào bảng
        filteredRows.forEach(row => tableBody.appendChild(row));
    }
    
    // Gắn sự kiện click cho các trường ngày
    document.getElementById("fromDate").addEventListener("change", filterAndSortOrders);
    document.getElementById("toDate").addEventListener("change", filterAndSortOrders);

*/    
    
// Hàm tải file về (CSV)
function downloadFile() {
    // Lấy bảng đơn hàng
    const table = document.querySelector(".table_order table");

    // Chuyển bảng HTML thành dạng CSV
    let csvContent = "";
    const rows = table.querySelectorAll("tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("th, td");
        let rowData = Array.from(cells).map(cell => cell.innerText.trim()).join(",");
        csvContent += rowData + "\n";
    });

    // Tạo một Blob từ dữ liệu CSV
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    
    // Tạo URL cho Blob
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    // Tạo liên kết tải file
    link.setAttribute("href", url);
    link.setAttribute("download", "Danh_sach_don_hang.csv");
    document.body.appendChild(link);
    
    // Kích hoạt liên kết để tải file
    link.click();
    
    // Xóa liên kết sau khi sử dụng
    document.body.removeChild(link);
}

// Gắn sự kiện click vào nút "Tải file về"
document.querySelector(".dowload").addEventListener("click", downloadFile);

// Hàm in dữ liệu
function printData() {
    // Lấy bảng đơn hàng
    const table = document.querySelector(".table_order table");

    // Tạo một cửa sổ mới để in
    const printWindow = window.open('', '', 'height=600,width=800');

    // Tạo nội dung HTML cho cửa sổ in, chỉ bao gồm bảng và tiêu đề
    printWindow.document.write('<html><head><title>In dữ liệu</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; } table { width: 100%; border-collapse: collapse; } th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>Danh sách đơn hàng</h1>');
    printWindow.document.write(table.outerHTML); // Chèn bảng vào trong cửa sổ in
    printWindow.document.write('</body></html>');
    
    // Đợi tài liệu tải xong và thực hiện in
    printWindow.document.close(); // Đóng tài liệu để trình duyệt bắt đầu xử lý
    printWindow.print(); // Lệnh in
}

// Gắn sự kiện click vào nút "In dữ liệu"
document.querySelector(".print").addEventListener("click", printData);

// Hàm sao chép dữ liệu
function copyData() {
    // Lấy tất cả các hàng trong bảng
    const table = document.querySelector(".table_order table");
    let textToCopy = '';

    // Lặp qua tất cả các hàng trong bảng
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = [];
        
        // Lấy dữ liệu của từng cột trong mỗi hàng
        cells.forEach(cell => {
            rowData.push(cell.innerText); // Lấy nội dung ô
        });

        // Thêm dữ liệu hàng vào chuỗi textToCopy
        textToCopy += rowData.join("\t") + "\n"; // Tách các cột bằng tab, và mỗi hàng cách nhau bằng dấu xuống dòng
    });

    // Sao chép vào clipboard
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Dữ liệu đã được sao chép vào clipboard!");
        })
        .catch(err => {
            console.error("Lỗi sao chép vào clipboard: ", err);
            alert("Không thể sao chép dữ liệu!");
        });
}

// Gắn sự kiện click vào nút "Sao chép"
document.querySelector(".copy").addEventListener("click", copyData);

// Lấy các phần tử cần thiết
const newOrderButton = document.querySelector(".new");
const createOrderForm = document.querySelector(".create-order-form");
const saveOrderButton = document.getElementById("saveOrder");
const cancelOrderButton = document.getElementById("cancelOrder");
const customerNameInput = document.getElementById("customerName");
const orderDateInput = document.getElementById("orderDate");
const addressInput = document.getElementById("address");
const statusSelect = document.getElementById("status");
const tableBody = document.querySelector(".table_order table tbody");

// Hiển thị form tạo mới khi nhấn nút "Tạo mới"
newOrderButton.addEventListener("click", () => {
    createOrderForm.style.display = "block";
});

// Hủy việc tạo mới
cancelOrderButton.addEventListener("click", () => {
    createOrderForm.style.display = "none";
});

// Lưu đơn hàng mới vào bảng
saveOrderButton.addEventListener("click", () => {
    const customerName = customerNameInput.value.trim();
    const orderDate = orderDateInput.value.trim();
    const address = addressInput.value.trim();
    const status = statusSelect.value;

    // Kiểm tra nếu thông tin cần thiết đã được điền
    if (!customerName || !orderDate || !address) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    // Tạo ID tự động (có thể làm theo kiểu DCT + số ngẫu nhiên hoặc ID tăng dần)
    const newId = `DCT${Math.floor(Math.random() * 1000) + 1}`;

    // Thêm dòng mới vào bảng
    const newRow = document.createElement("tr");
    newRow.dataset.status = status;

    newRow.innerHTML = `
        <td><input type="checkbox"></td>
        <td>${newId}</td>
        <td>${customerName}</td>
        <td>${orderDate}</td>
        <td>${address}</td>
        <td class="order-item"><span class="order-item${status === 'completed' ? '1' : status === 'processing' ? '3' : '2'}">${status === 'completed' ? 'Đã xử lí' : status === 'processing' ? 'Đang xử lí' : 'Chưa xử lí'}</span></td>
        <td><a href="detail_products.html">Chi tiết</a></td>
    `;

    // Thêm dòng mới vào bảng
    tableBody.appendChild(newRow);

    // Ẩn form và xóa giá trị các trường sau khi lưu
    createOrderForm.style.display = "none";
    customerNameInput.value = '';
    orderDateInput.value = '';
    addressInput.value = '';
    statusSelect.value = 'pending';
    
    alert("Đơn hàng đã được tạo!");
});
