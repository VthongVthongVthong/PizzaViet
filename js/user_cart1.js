document.addEventListener('DOMContentLoaded', () => {
    const noProductDiv = document.querySelector('.noproduct');
    const payDiv = document.querySelector('.pay');
    const ordersContainer = document.querySelector('.--orders');
    const details = [];
    const imagePaths = [];

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
                    const img = productDiv.querySelector("div.orders--items-left > img");
                    if (img && img.getAttribute("src")) {
                        const src = img.getAttribute("src");
                        const match = src.match(/\/([dn])(\d+)\.jpg$/i); // Regex cập nhật
                        if (match) {
                            const type = match[1]; // 'd' hoặc 'n'
                            const detailIndex = parseInt(match[2], 10); // Lấy số từ regex
                            let key;
                
                            if (type === 'd' && detailIndex >= 1 && detailIndex <= 12) {
                                key = `detail${detailIndex}`;
                            } else if (type === 'n' && detailIndex >= 1 && detailIndex <= 4) {
                                key = `detail${detailIndex + 12}`;
                            }
                
                            if (key) {
                                console.log(`Xóa localStorage key: ${key}`); // Debug key
                
                                // Xóa key trong localStorage
                                if (localStorage.getItem(key)) {
                                    localStorage.removeItem(key);
                                    console.log(`Đã xóa ${key} khỏi localStorage`);
                                } else {
                                    console.error(`${key} không tồn tại trong localStorage`);
                                }
                
                                // Xóa div hiện tại
                                const productDiv = deleteButton.closest(".orders--items"); // Tìm div cha gần nhất
                                if (productDiv) {
                                    console.log("Xóa productDiv:", productDiv);
                                    productDiv.remove();
                                    console.log("Đã xóa productDiv thành công.");
                                } else {
                                    console.error("Không tìm thấy productDiv để xóa.");
                                }
                
                                // Cập nhật lại giỏ hàng
                                cart = cart.filter(item => item.detailIndex !== (type === 'd' ? detailIndex : detailIndex + 12));
                                renderCart(); // Render lại giao diện
                            } else {
                                console.error("detailIndex không nằm trong phạm vi hợp lệ");
                            }
                        } else {
                            console.error("Không xác định được detailIndex từ src ảnh");
                        }
                    } else {
                        console.error("Không tìm thấy ảnh hoặc src không hợp lệ");
                    }
                    console.log("Trước khi xóa: localStorage:", localStorage);
                    console.log("Trước khi xóa: cart:", cart);

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

            // Hiển thị phí ship
            const shippingFeeDiv = document.createElement('div');
            shippingFeeDiv.classList.add('shipping-fee');
            shippingFeeDiv.innerText = `Phí ship: miễn phí`;
            ordersContainer.appendChild(shippingFeeDiv);

            // Hiển thị tổng giá tiền
            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.classList.add('total-price');
            totalPriceDiv.innerText = `Tổng cộng: ${totalPrice.toLocaleString('vi-VN')} đ`;
            ordersContainer.appendChild(totalPriceDiv);
        }

        function renderTotalPrice() {
            let totalPrice = 0;
            cart.forEach(product => {
                totalPrice += product.price * product.quantity;
            });
            const totalPriceDiv = document.querySelector('.total-price');
            if (totalPriceDiv) {
                totalPriceDiv.innerText = `Tổng cộng: ${totalPrice.toLocaleString('vi-VN')} đ`;
            }
        }

        renderCart();
    } else {
        if (noProductDiv) {
            noProductDiv.style.display = 'block';
        }

        // Ẩn nút thanh toán khi không có sản phẩm trong giỏ hàng
        if (payDiv) {
            payDiv.style.visibility = 'hidden';
        }
    }
});