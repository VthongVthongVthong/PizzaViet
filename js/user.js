document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the username from localStorage (you can retrieve from the URL or sessionStorage if needed)
    var username = localStorage.getItem('username'); // e.g., '2'

    if (username !== null) {
        // Retrieve the user data from localStorage using the username as the key
        var userData = JSON.parse(localStorage.getItem(username));
        
        if (userData) {
            // Populate the username fields (for all elements with class 'profile-username')
            var usernameElements = document.querySelectorAll('.profile-username');
            usernameElements.forEach(function(element) {
                element.textContent = userData.username;
            });
            
            // Populate the email field
            document.querySelector('.profile-email').textContent = userData.email;
            
            // Populate the password field
            document.querySelector('.profile-password').textContent = userData.password; // Avoid showing password directly in production.
        } else {
            console.log("User data not found.");
        }
    } else {
        console.log("Username not found.");
    }
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
                        window.location.href = "./index.html";
                    }
                });
                }
              });
        });
    });
    
});