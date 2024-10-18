function login(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("tên đăng nhập không tồn tại");
    }
    else if(username==data.username && password== data.password){
        alert("Đăng nhập thành công!");
        window.location.href = "Pizza website.html";
    }
    else{
        alert("đăng nhập thật bại");
    }
}
