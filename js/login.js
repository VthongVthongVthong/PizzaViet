// Tạo hiệu ứng fade-in cho trang đăng ký
const sr = ScrollReveal({
    distance: '50px',      // Khoảng cách di chuyển
    duration: 3000,        // Thời gian chuyển động (3 giây)
    reset: false           // Không reset lại khi cuộn lại lên
});

// Áp dụng hiệu ứng cho form đăng ký
sr.reveal('.login', { delay: 300, origin: 'bottom' });


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

function login(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        Swal.fire({
            title: 'Lỗi!',
            text: 'Tên đăng nhập không tồn tại',
            icon: 'error',
            confirmButtonText: 'Thử lại'
          })
    }
    else if(username==data.username && password== data.password){
        Swal.fire({
            title: 'Thành công!',
            text: 'Đăng nhập thành công',
            icon: 'success',
            confirmButtonText: 'Chuyển tới trang web'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'Pizza website.html';
            }
          });
        
    }
    else{
        Swal.fire({
            title: 'Lỗi!',
            text: 'Mật khẩu không chính xác',
            icon: 'error',
            confirmButtonText: 'Thử lại'
          })
    }
}

window.setInterval(() => {
    try {
      let button = document.querySelector("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
      if (button) {
        // Đặt màu mặc định thành #00628F nếu chưa hover
        if (!button.classList.contains("hovering")) {
          button.style.backgroundColor = "#00628F";
        }
  
        // Thêm sự kiện hover
        button.addEventListener("mouseenter", function() {
          button.classList.add("hovering");
          button.style.backgroundColor = "#009CE3"; // Đổi màu khi hover
        });
  
        button.addEventListener("mouseleave", function() {
          button.classList.remove("hovering");
          button.style.backgroundColor = "#00628F"; // Đổi lại màu khi không hover
        });
      }
    }
    catch (error) {
      console.error("Lỗi:", error); // Xử lý lỗi nếu có
    }
  }, 100);
  
  
  
