document.addEventListener("DOMContentLoaded", function () {
    const itemsToSignup = document.querySelectorAll(".bx-cart"); // Chọn tất cả các phần tử có class itemtoSignup

    // Lặp qua từng item để gán sự kiện
    itemsToSignup.forEach(function(item) {
        item.addEventListener("click", function() {
            Swal.fire({
                title: "Cần phải đăng nhập để thêm sản phẩm vào giỏ hàng.",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Chuyển hướng tới trang login.html sau khi nhấn OK
                    window.location.href = "../login.html";
                }
            });
        });
    });
});