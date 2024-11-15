document.addEventListener("DOMContentLoaded", function () {
    const imageUpload = document.getElementById('imageUpload');
    const changeImageButton = document.getElementById('changeImageButton');
    const saveImageButton = document.getElementById('saveImageButton');
    const profileImage = document.querySelector("#file > div.hoso--img.col-4 > img");
    const leftProfileImage = document.querySelector("body > section.file.container > div > div.file__left.col-3 > div > img");

    let originalImageSrc = profileImage.src;

    // Load saved image from local storage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImage.src = savedImage;
        leftProfileImage.src = savedImage;
        originalImageSrc = savedImage;
    }

    // Disable save button initially
    saveImageButton.classList.add('disabled');
    saveImageButton.disabled = true;

    // Trigger file input when change button is clicked
    changeImageButton.addEventListener('click', function () {
        imageUpload.click();
    });

    // Handle image upload
    imageUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
                // Enable save button if image has changed
                if (profileImage.src !== originalImageSrc) {
                    saveImageButton.classList.remove('disabled');
                    saveImageButton.style.backgroundColor = '#00628F';
                    saveImageButton.disabled = false;
                }
            };
            reader.readAsDataURL(file);
        } else {
            Swal.fire({
                icon: "error",
                title: "Lỗi",
                text: "Hãy chọn đúng định dạng (jpg, jpeg, png).",
            });
        }
    });

    // Save image to local storage and update both images
    saveImageButton.addEventListener('click', function () {
        const imageSrc = profileImage.src;
        localStorage.setItem('profileImage', imageSrc);
        leftProfileImage.src = imageSrc;
        originalImageSrc = imageSrc;
        Swal.fire({
            title: "Thành công!",
            text: "Thông tin đã được cập nhật!",
            icon: "success"
        });
        // Disable save button after saving
        saveImageButton.classList.add('disabled');
        saveImageButton.style.backgroundColor = '#858585';
        saveImageButton.disabled = true;
    });

    // Handle order detail modal for first order
    const orderDetailIcon1 = document.querySelector("#order > table > tbody > tr:nth-child(1) > td:nth-child(5) > i");
    orderDetailIcon1.addEventListener('click', function () {
        document.getElementById('orderId').innerText = 'D01';
        document.getElementById('orderCustomer').innerText = 'Nguyễn Văn A';
        document.getElementById('orderAccount').innerText = 'Khachhang';
        document.getElementById('orderPhone').innerText = '0935889043';
        document.getElementById('orderAddress').innerText = '273, An Dương Vương, Quận 5, TP HCM';
        document.getElementById('orderProduct').innerText = 'Pizza Hải Sản Xốt Mayonnaise Hảo Hạng';
        document.getElementById('orderTotal').innerText = '185,000₫';
        const orderStatus = document.getElementById('orderStatus');
        orderStatus.innerText = 'Đang xử lý';
        orderStatus.classList.remove('green-text', 'red-text', 'blue-text');
        orderStatus.classList.add('orange-text');
        document.getElementById('orderImage').src = '../img/d1.jpg';
        const orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
        orderDetailModal.show();
    });

    // Handle order detail modal for second order
    const orderDetailIcon2 = document.querySelector("#order > table > tbody > tr:nth-child(2) > td:nth-child(5) > i");
    orderDetailIcon2.addEventListener('click', function () {
        document.getElementById('orderId').innerText = 'D02';
        document.getElementById('orderCustomer').innerText = 'Nguyễn Văn A';
        document.getElementById('orderAccount').innerText = 'Khachhang';
        document.getElementById('orderPhone').innerText = '0935889043';
        document.getElementById('orderAddress').innerText = '273, An Dương Vương, Quận 5, TP HCM';
        document.getElementById('orderProduct').innerText = 'Pizza New York Beefsteak Phô Mai';
        document.getElementById('orderTotal').innerText = '215,000₫';
        const orderStatus = document.getElementById('orderStatus');
        orderStatus.innerText = 'Đang vận chuyển';
        orderStatus.classList.remove('orange-text', 'red-text', 'blue-text');
        orderStatus.classList.add('green-text');
        document.getElementById('orderImage').src = '../img/d2.jpg';
        const orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
        orderDetailModal.show();
    });

    // Handle order detail modal for third order
    const orderDetailIcon3 = document.querySelector("#order > table > tbody > tr:nth-child(3) > td:nth-child(5) > i");
    orderDetailIcon3.addEventListener('click', function () {
        document.getElementById('orderId').innerText = 'D03';
        document.getElementById('orderCustomer').innerText = 'Nguyễn Văn A';
        document.getElementById('orderAccount').innerText = 'Khachhang';
        document.getElementById('orderPhone').innerText = '0935889043';
        document.getElementById('orderAddress').innerText = '273, An Dương Vương, Quận 5, TP HCM';
        document.getElementById('orderProduct').innerText = 'Pizza Siêu Topping Xúc Xích Ý Truyền Thống';
        document.getElementById('orderTotal').innerText = '195,000₫';
        const orderStatus = document.getElementById('orderStatus');
        orderStatus.innerText = 'Đã huỷ';
        orderStatus.classList.remove('orange-text', 'green-text', 'blue-text');
        orderStatus.classList.add('red-text');
        document.getElementById('orderImage').src = '../img/d3.jpg';
        const orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
        orderDetailModal.show();
    });

    // Handle order detail modal for fourth order
    const orderDetailIcon4 = document.querySelector("#order > table > tbody > tr:nth-child(4) > td:nth-child(5)");
    orderDetailIcon4.addEventListener('click', function () {
        document.getElementById('orderId').innerText = 'D04';
        document.getElementById('orderCustomer').innerText = 'Nguyễn Văn A';
        document.getElementById('orderAccount').innerText = 'Khachhang';
        document.getElementById('orderPhone').innerText = '0935889043';
        document.getElementById('orderAddress').innerText = '273, An Dương Vương, Quận 5, TP HCM';
        document.getElementById('orderProduct').innerText = 'Pizza Siêu Topping Hải Sản Xốt Mayonnaise';
        document.getElementById('orderTotal').innerText = '205,000₫';
        const orderStatus = document.getElementById('orderStatus');
        orderStatus.innerText = 'Đã hoàn thành';
        orderStatus.classList.remove('orange-text', 'green-text', 'red-text');
        orderStatus.classList.add('blue-text');
        document.getElementById('orderImage').src = '../img/d4.jpg';
        const orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
        orderDetailModal.show();
    });

    // Filter table rows based on selected status
    const orderSelect = document.querySelector(".form-select.donhang-select");
    orderSelect.addEventListener('change', function () {
        const selectedStatus = orderSelect.options[orderSelect.selectedIndex].text;
        const orderTableBody = document.getElementById('orderTableBody');
        const rows = Array.from(orderTableBody.getElementsByTagName('tr'));

        rows.forEach(row => {
            const status = row.querySelector('td:nth-child(4) > div').innerText;
            if (selectedStatus === 'Trạng thái' || status === selectedStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Define support function
    window.support = function() {
        const fileRight = document.querySelector("#file__right");
        fileRight.innerHTML = '<p style="color: red;">Nếu bạn cần hỗ trợ, hãy liên hệ trực tiếp Zalo hoặc Sđt: <a href="tel:0935889042" style="color: red;">0935889042</a> để có thể giải quyết nhanh nhất. PizzaViet xin chân thành cảm ơn!</p>';
    };
});