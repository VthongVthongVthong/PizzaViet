document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.querySelector('a[href="admin_index.html"]');
    logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
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
                        // Redirect to the specified URL
                        window.location.href = "admin_index.html";
                    }
                });
            }
        });
    });
});