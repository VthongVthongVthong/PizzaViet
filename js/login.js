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
