const quantityInput = document.getElementById('soluong'); // Số lượng nhập thủ công
    const priceDisplay = document.getElementById('price'); // Hiển thị giá tiền
    const form = document.querySelector('form'); // Lấy form chứa nút submit

    // Lấy giá tiền linh hoạt từ thẻ <h2> và chuyển thành số
    let pricePerUnit = parseInt(priceDisplay.innerText.replace(/[^\d]/g, ''));

    // Cập nhật giá trị tổng khi thay đổi số lượng
    function updateDisplay() {
        const quantity = parseInt(quantityInput.value) || 1; // Lấy giá trị số lượng từ input
        const totalPrice = quantity * pricePerUnit;
        priceDisplay.innerText = totalPrice.toLocaleString('vi-VN') + ' đ'; // Định dạng giá tiền
    }

    // Lắng nghe sự kiện thay đổi giá trị số lượng
    quantityInput.addEventListener('input', updateDisplay);

    // Xử lý tăng giảm số lượng
    document.getElementById('increase').addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateDisplay();
    });

    document.getElementById('decrease').addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateDisplay();
        }
    });

    // Kiểm tra số lượng hợp lệ khi gửi form
    form.addEventListener('submit', function(event) {
        const quantity = parseInt(quantityInput.value);

        // Kiểm tra nếu số lượng là 0 hoặc trống
        if (isNaN(quantity) || quantity <= 0) {
            event.preventDefault(); // Ngừng gửi form
            alert("SỐ LƯỢNG PHẢI LỚN HƠN 0 VÀ KHÔNG ĐỂ TRỐNG.  XIN NHẬP LẠI."); // Thông báo lỗi
        }
    });

    // Khởi tạo giá trị ban đầu
    updateDisplay();