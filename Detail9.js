document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('soluong'); // Số lượng nhập thủ công
    const priceDisplay = document.getElementById('price'); // Hiển thị giá tiền
    const form = document.querySelector('form'); // Lấy form chứa nút submit
    const addToCartButton = document.querySelector('.submit-btn');

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
  form.addEventListener('submit', function(event) {
        const quantity = parseInt(quantityInput.value);

        // Kiểm tra số lượng phải nhỏ hơn hoặc bằng 100
        if (isNaN(quantity) || quantity > 100) {
            event.preventDefault(); // Ngừng gửi form
            alert("SỐ LƯỢNG PHẢI NHỎ HƠN HOẶC BẰNG 100. XIN NHẬP LẠI."); // Thông báo lỗi
        }
    });
    // Khởi tạo giá trị ban đầu
    updateDisplay();

    if (addToCartButton && quantityInput) {
        addToCartButton.addEventListener('click', function(event) {
            event.preventDefault(); // Ngừng hành động gửi form mặc định

            const quantity = parseInt(quantityInput.value);
            const unitPrice = 185000; // Giá tiền cố định cho sản phẩm

            // Kiểm tra số lượng hợp lệ
            if (isNaN(quantity) || quantity <= 0) {
                alert("SỐ LƯỢNG PHẢI LỚN HƠN 0 VÀ KHÔNG ĐỂ TRỐNG. XIN NHẬP LẠI.");
                return;
            }
            else if (quantity > 100) {
                alert("SỐ LƯỢNG PHẢI NHỎ HƠN 100. XIN NHẬP LẠI.");
                return;
            }
            // Tạo đối tượng sản phẩm
            const product = {
                name: "Pizza Ngập Vị Phô Mai Hảo Hạng",
                quantity: quantity,
                price: unitPrice
            };

            // Lấy giỏ hàng từ localStorage hoặc tạo mới nếu chưa có
            let cart = JSON.parse(localStorage.getItem('detail9')) || [];

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
            const existingProductIndex = cart.findIndex(item => item.name === product.name);

            if (existingProductIndex !== -1) {
                // Sản phẩm đã tồn tại, tăng số lượng và cập nhật giá tiền
                cart[existingProductIndex].quantity += product.quantity;
            } else {
                // Sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
                cart.push(product);
            }

            // Lưu giỏ hàng vào localStorage
            localStorage.setItem('detail9', JSON.stringify(cart));
            Swal.fire({
                title: "Tuyệt!",
                text: "Bạn đã thêm sẩn phẩm vào giỏ hàng!",
                icon: "success"
            });
            // Cập nhật hiển thị giỏ hàng (nếu cần)
            updateDisplay();
        });
    } else {
        console.error('addToCartButton hoặc quantityInput không tồn tại.');
    }

    const noProductDiv = document.querySelector('.noproduct');
    const ordersContainer = document.querySelector('.--orders');

    if (localStorage.getItem('detail9')) {
        if (noProductDiv) {
            noProductDiv.style.display = 'none';
        }

        const cart = JSON.parse(localStorage.getItem('detail9'));

        cart.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('orders--items');

            const productImageDiv = document.createElement('div');
            productImageDiv.classList.add('orders--items-left');
            const productImage = document.createElement('img');
            productImage.src = '../img/d2.jpg'; // Đường dẫn hình ảnh cố định
            productImage.alt = product.name;
            productImageDiv.appendChild(productImage);

            const productInfoDiv = document.createElement('div');
            productInfoDiv.classList.add('orders--items-right');

            const productName = document.createElement('div');
            productName.classList.add('items--name');
            const productNameLink = document.createElement('a');
            productNameLink.href = '#';
            productNameLink.innerText = product.name;
            productName.appendChild(productNameLink);

            const productQuantity = document.createElement('div');
            productQuantity.classList.add('product_qty');
            productQuantity.innerHTML = `
                <button class="qtyminus">-</button>
                <input type="number" value="${product.quantity}" min="1" step="1">
                <button class="qtyplus">+</button>
            `;

            const productPrice = document.createElement('div');
            productPrice.classList.add('items--price');
            productPrice.innerText = `${(product.price * product.quantity).toLocaleString('vi-VN')} đ`;

            productInfoDiv.appendChild(productName);
            productInfoDiv.appendChild(productQuantity);
            productInfoDiv.appendChild(productPrice);

            productDiv.appendChild(productImageDiv);
            productDiv.appendChild(productInfoDiv);

            ordersContainer.appendChild(productDiv);

            // Event listeners for quantity buttons and input
            const qtyMinusButton = productQuantity.querySelector('.qtyminus');
            const qtyPlusButton = productQuantity.querySelector('.qtyplus');
            const qtyInput = productQuantity.querySelector('input');

            qtyMinusButton.addEventListener('click', () => {
                if (qtyInput.value > 1) {
                    qtyInput.value = parseInt(qtyInput.value) - 1;
                    updateProductQuantity(index, qtyInput.value);
                }
            });

            qtyPlusButton.addEventListener('click', () => {
                qtyInput.value = parseInt(qtyInput.value) + 1;
                updateProductQuantity(index, qtyInput.value);
            });

            qtyInput.addEventListener('input', () => {
                if (qtyInput.value < 1) {
                    qtyInput.value = 1;
                }
                updateProductQuantity(index, qtyInput.value);
            });

            function updateProductQuantity(index, quantity) {
                cart[index].quantity = parseInt(quantity);
                localStorage.setItem('detail9', JSON.stringify(cart));
                productPrice.innerText = `${(cart[index].price * cart[index].quantity).toLocaleString('vi-VN')} đ`;
            }
        });
    } else {
        if (noProductDiv) {
            noProductDiv.style.display = 'block';
        }
    }
});