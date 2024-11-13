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

document.addEventListener("DOMContentLoaded", function () {
    const btnradio1 = document.getElementById('btnradio1');
    const btnradio2 = document.getElementById('btnradio2');
    const btnradio3 = document.getElementById('btnradio3');
    const btnradio4 = document.getElementById('btnradio4');
    const paymentDetails = document.getElementById('paymentDetails');
    const visaMethod = document.querySelector("#payment__method > div.payment__method--visa.payment__method > p");

    function hideVisaMethod() {
        visaMethod.style.display = 'none';
    }

    function showVisaMethod() {
        visaMethod.style.display = 'block';
    }

    btnradio1.addEventListener('change', function() {
        if (this.checked) {
            paymentDetails.innerHTML = '';
            showVisaMethod();
        }
    });

    btnradio2.addEventListener('change', function() {
        if (this.checked) {
            paymentDetails.innerHTML = '';
            showVisaMethod();
        }
    });

    btnradio3.addEventListener('change', function() {
        if (this.checked) {
            paymentDetails.innerHTML = `
                <div class="payment__method--bank payment__method">
                    <p>1. Ngân hàng TMCP Sài Gòn Thường Tín - Sacombank
                        <br>
                        STK: 0935889042
                        <br>
                        Chủ Tài Khoản: HUYNH VIEN THONG
                        <br>
                        Nội dung: SĐT + HỌ TÊN
                        <br>
                        <br>
                        2. VÍ ĐIỆN TỬ MOMO
                        <br>
                        STK: 0935889042
                        <br>
                        Chủ Tài Khoản: HUYNH VIEN THONG
                        <br>
                        Nội dung: SĐT + HỌ TÊN
                        <br>
                        <br>
                        Thời gian vận chuyển sẽ được nhân viên gọi điện xác nhận!
                        <br>Thông tin chi tiết đơn hàng sẽ được chúng tôi gửi về email của bạn!
                        <br>
                        <span>Lưu ý:</span>
                        <br>
                        SAU KHI CHUYỂN KHOẢN XONG, NHÂN VIÊN CỦA PIZZAVIET SẼ GỌI CHO BẠN ĐỂ XÁC NHẬN. NẾU KHÔNG
                        NHẬN ĐƯỢC CUỘC GỌI QUÁ 15 PHÚT, XIN HÃY GỌI <span>HOTLINE: 0935889042 </span>
                        <br>
                    </p>
                </div>
            `;
            hideVisaMethod();
        }
    });

    btnradio4.addEventListener('change', function() {
        if (this.checked) {
            paymentDetails.innerHTML = `
                <div class="payment__method--money payment__method">
                    <p>Quý khách chỉ phải thanh toán khi nhận được hàng - Chi phí vận chuyển và thời gian vận chuyển
                        sẽ được nhân viên gọi điện xác nhận!
                        <br> <br>Thông tin chi tiết đơn hàng sẽ được chúng tôi gửi về email của bạn!
                        <br><br>
                        Để đảm bảo giải quyết các vấn đề phát sinh về đơn hàng một cách minh bạch, quý khách vui
                        lòng quay lại video khi mở hàng.
                        <br> <br>
                        Trong trường hợp shop gửi thiếu hàng, hỏng hàng, sai hàng quý khách vui lòng phản hồi và
                        gửi lại video cho shop để kiểm chứng, cửa hàng sẽ tiến hành bù hoàn sau khi đã xác nhận.
                        <br> <br>
                        Trường hợp không có video bóc hàng shop xin TỪ CHỐI giải quyết.
                    </p>
                </div>
            `;
            hideVisaMethod();
        }
    });
});