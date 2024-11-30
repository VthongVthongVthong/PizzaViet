document.addEventListener('DOMContentLoaded', () => {
    const noProductDiv = document.querySelector('.noproduct');
    const payDiv = document.querySelector('.pay');
    const ordersContainer = document.querySelector('.--orders');
    const details = [];
    const imagePaths = [];

    console.log("Khởi tạo script user_cart.js...");

    for (let i = 1; i <= 16; i++) {
        const detail = localStorage.getItem(`detail${i}`);
        if (detail) {
            details.push(JSON.parse(detail));
            if (i <= 12) {
                imagePaths.push(`../img/d${i}.jpg`);
            } else {
                imagePaths.push(`../img/n${i - 12}.jpg`);
            }
        }
    }

    if (details.length > 0) {
        if (noProductDiv) {
            noProductDiv.style.display = 'none';
        }

        // Hiển thị nút thanh toán khi có sản phẩm trong giỏ hàng
        if (payDiv) {
            payDiv.style.visibility = 'visible';
        }

        let cart = [];
        details.forEach((detail, index) => {
            cart = cart.concat(detail.map(product => ({ ...product, imagePath: imagePaths[index], detailIndex: index + 1 })));
        });

        function renderCart() {
            console.log("Bắt đầu render giỏ hàng...");
            ordersContainer.innerHTML = ''; // Xóa tất cả các sản phẩm hiện tại
            let totalPrice = 0; // Biến để lưu tổng giá tiền

            cart.forEach((product, index) => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('orders--items');

                const productImageDiv = document.createElement('div');
                productImageDiv.classList.add('orders--items-left');
                const productImage = document.createElement('img');
                productImage.src = product.imagePath;
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
                    <button style="color: #00628f;" class="qtyminus">-</button>
                    <input type="number" value="${product.quantity}" min="1" step="1">
                    <button style="color: #00628f;" class="qtyplus">+</button>
                `;

                const productPrice = document.createElement('div');
                productPrice.classList.add('items--price');
                productPrice.innerText = `${(product.price * product.quantity).toLocaleString('vi-VN')} đ`;

                // Cộng giá tiền của sản phẩm vào tổng giá tiền
                totalPrice += product.price * product.quantity;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.innerHTML = '🗑️'; // Biểu tượng thùng rác
                deleteButton.addEventListener('click', () => {
                    // Xóa tất cả sản phẩm liên quan đến detailIndex
                    const detailIndex = product.detailIndex;
                    cart = cart.filter(item => item.detailIndex !== detailIndex);
                    localStorage.removeItem(`detail${detailIndex}`);
                    renderCart(); // Render lại giỏ hàng sau khi xóa
                });

                productInfoDiv.appendChild(productName);
                productInfoDiv.appendChild(productQuantity);
                productInfoDiv.appendChild(productPrice);
                productInfoDiv.appendChild(deleteButton);

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
                    localStorage.setItem(`detail${product.detailIndex}`, JSON.stringify(cart.filter(item => item.detailIndex === product.detailIndex)));
                    productPrice.innerText = `${(cart[index].price * cart[index].quantity).toLocaleString('vi-VN')} đ`;
                    renderTotalPrice(); // Cập nhật tổng giá tiền sau khi thay đổi số lượng
                }
            });

            // Hiển thị tổng giá tiền
            renderTotalPrice();

            console.log("Kết thúc render giỏ hàng.");
        }

        function renderTotalPrice() {
            let totalPrice = 0;
            cart.forEach(product => {
                totalPrice += product.price * product.quantity;
            });
        
            // Xử lý phần tử "Tổng cộng"
            let totalPriceDiv = document.querySelector('.total-price');
            if (totalPrice === 0) {
                if (totalPriceDiv) {
                    totalPriceDiv.remove(); // Xóa phần tử nếu tổng giá trị bằng 0
                }
            } else {
                if (!totalPriceDiv) {
                    totalPriceDiv = document.createElement('div');
                    totalPriceDiv.classList.add('total-price');
                    ordersContainer.appendChild(totalPriceDiv); // Thêm vào container
                }
                totalPriceDiv.innerText = `Tổng cộng: ${totalPrice.toLocaleString('vi-VN')} đ`;
            }
        
            // Xử lý phần tử "Phí ship"
            let shippingFeeDiv = document.querySelector('.shipping-fee');
            if (totalPrice === 0) {
                if (shippingFeeDiv) {
                    shippingFeeDiv.remove(); // Xóa phần tử nếu tổng giá trị bằng 0
                }
            } else {
                if (!shippingFeeDiv) {
                    shippingFeeDiv = document.createElement('div');
                    shippingFeeDiv.classList.add('shipping-fee');
                    ordersContainer.appendChild(shippingFeeDiv);
                }
                shippingFeeDiv.innerText = `Phí ship: miễn phí`;
            }
        
            console.log("Tổng giá trị giỏ hàng:", totalPrice);
        
            // Ẩn hoặc hiện nút thanh toán dựa vào tổng giá trị giỏ hàng
            if (payDiv) {
                if (totalPrice === 0) {
                    console.log("Tổng giá trị bằng 0, ẩn nút thanh toán.");
                    payDiv.style.visibility = 'hidden';
                } else {
                    console.log("Tổng giá trị khác 0, hiển thị nút thanh toán.");
                    payDiv.style.visibility = 'visible';
                }
            }
        }        

        renderCart();
    } else {
        if (noProductDiv) {
            noProductDiv.style.display = 'block';
        }

        // Ẩn nút thanh toán khi không có sản phẩm trong giỏ hàng
        if (payDiv) {
            console.log("Không có sản phẩm trong giỏ hàng, ẩn nút thanh toán.");
            payDiv.style.visibility = 'hidden';
        }
    }
});
