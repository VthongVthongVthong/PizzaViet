
document.addEventListener("DOMContentLoaded", function () {
    const eyeOpen = document.querySelector(".eye-open");
    const eyeClose = document.querySelector(".eye-close");

    const eyeOpen1 = document.querySelector(".eye-open1");
    const eyeClose1= document.querySelector(".eye-close1");
    const passwordField = document.getElementById("password");
    const passwordField1 = document.getElementById("confirmPassword");

    // Sự kiện khi nhấn vào mắt mở (eyeOpen)
    eyeOpen.addEventListener("click", function() {
        eyeOpen.classList.add("hidden");
        eyeClose.classList.remove("hidden");
        passwordField.type = "text";  // Hiển thị mật khẩu
    });

    // Sự kiện khi nhấn vào mắt đóng (eyeClose)
    eyeClose.addEventListener("click", function() {
        eyeClose.classList.add("hidden");
        eyeOpen.classList.remove("hidden");
        passwordField.type = "password";  // Ẩn mật khẩu
    });

    // Sự kiện khi nhấn vào mắt mở (eyeOpen)
    eyeOpen1.addEventListener("click", function() {
        eyeOpen1.classList.add("hidden");
        eyeClose1.classList.remove("hidden");
        passwordField1.type = "text";  // Hiển thị mật khẩu
    });

    // Sự kiện khi nhấn vào mắt đóng (eyeClose)
    eyeClose1.addEventListener("click", function() {
        eyeClose1.classList.add("hidden");
        eyeOpen1.classList.remove("hidden");
        passwordField1.type = "password";  // Hiển thị mật khẩu
    });
});


function signup(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

    alert("Đăng ký thành công!");
}