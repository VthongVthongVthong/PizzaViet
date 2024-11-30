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
                        window.location.href = "../../index.html";
                    }
                });
                }
              });
        });
    });
    
});