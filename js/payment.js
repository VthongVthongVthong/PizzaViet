document.addEventListener('DOMContentLoaded', () => {
    const paymentButton = document.querySelector('.payment');
    const btnradio1 = document.querySelector('#btnradio1');
    const btnradio2 = document.querySelector('#btnradio2');
    const btnradio3 = document.querySelector('#btnradio3');
    const btnradio4 = document.querySelector('#btnradio4');
    const inputFields = document.querySelectorAll('#payment--receiver, #payment--phone, #payment--adr, #payment--note');
    const orderButton = document.querySelector('body > section.payment.container > div > div.payment__content__left.col-6 > form > button');

    function toggleInputFields() {
        if (btnradio1.checked || btnradio2.checked) {
            inputFields.forEach(input => input.disabled = true);
            orderButton.disabled = true;
        } else {
            inputFields.forEach(input => input.disabled = false);
            orderButton.disabled = false;
        }
    }

    // Kiểm tra trạng thái ban đầu
    toggleInputFields();

    // Thêm sự kiện thay đổi cho các nút radio
    btnradio1.addEventListener('change', toggleInputFields);
    btnradio2.addEventListener('change', toggleInputFields);
    btnradio3.addEventListener('change', toggleInputFields);
    btnradio4.addEventListener('change', toggleInputFields);

    paymentButton.addEventListener('click', () => {
        if (btnradio1.checked || btnradio2.checked) {
            alert('Không thể giao dịch');
        } else if (btnradio3.checked || btnradio4.checked) {
            alert('Giao dịch thành công');
        } else {
            alert('Vui lòng chọn phương thức thanh toán');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const userLogout = document.querySelectorAll(".userLogout"); // Chọn tất cả các phần tử có class userLogout
    userLogout.forEach(function(item) {
        item.addEventListener("click", function() {
            Swal.fire({
                title: "Bạn sẽ đăng xuất.",
                text: "Bạn chắc chứ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Có",
                cancelButtonText: "Huỷ"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Đăng xuất thành công!",
                    text: "Bạn đã đăng xuất.",
                    icon: "success"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        // Chuyển hướng tới trang login.html sau khi nhấn OK
                        window.location.href = "../index.html";
                    }
                });
                }
              });
        });
    });
    
});