// Lắng nghe sự kiện nhấn phím Enter trong thanh tìm kiếm
document.querySelector('.search-input').addEventListener('keypress', function (event) {
	if (event.key === 'Enter') { // Kiểm tra nếu phím Enter được nhấn
		event.preventDefault(); // Ngăn không cho form tự động submit
		searchFunction();
	}
});

// // Lắng nghe sự kiện nhấn vào biểu tượng tìm kiếm
// document.querySelector('.search-icon').addEventListener('click', function () {
// 	searchFunction();
// });

function searchFunction() {
	// Lấy giá trị từ thanh tìm kiếm
	const query = document.querySelector('.search-input').value.trim();

	// Kiểm tra nếu người dùng nhập từ khóa
	if (query) {
		// Chuyển hướng sang trang timkiem.html và truyền từ khóa tìm kiếm qua tham số query
		window.location.href = `timkiem_user.html?query=${encodeURIComponent(query)}`;
	} else {
		// Hiển thị cảnh báo nếu thanh tìm kiếm rỗng
		alert("Vui lòng nhập từ khóa để tìm kiếm!");
	}
}

 // Lấy tham số query từ URL
 const urlParams = new URLSearchParams(window.location.search);
 const query = urlParams.get('query');

 // Kiểm tra nếu có query và cập nhật thẻ h1
 if (query) {
     // Chèn query vào sau nội dung trong thẻ h1
     document.querySelector('#search-title').textContent = `Rất tiếc chúng tôi không tìm thấy sản phẩm: ${query}`;
 }

 // Lắng nghe sự kiện nhấn phím Enter trong thanh tìm kiếm
document.querySelector('.search-input').addEventListener('keypress', function (event) {
	if (event.key === 'Enter') { // Kiểm tra nếu phím Enter được nhấn
		event.preventDefault(); // Ngăn không cho form tự động submit
		searchFunction();
	}
});

// // Lắng nghe sự kiện nhấn vào biểu tượng tìm kiếm
// document.querySelector('.search-icon').addEventListener('click', function () {
// 	searchFunction();
// });

function searchFunction() {
	// Lấy giá trị từ thanh tìm kiếm
	const query = document.querySelector('.search-input').value.trim();

	// Kiểm tra nếu người dùng nhập từ khóa
	if (query) {
		// Chuyển hướng sang trang timkiem.html và truyền từ khóa tìm kiếm qua tham số query
		window.location.href = `../../../timkiem_user.html?query=${encodeURIComponent(query)}`;
	} else {
		// Hiển thị cảnh báo nếu thanh tìm kiếm rỗng
		alert("Vui lòng nhập từ khóa để tìm kiếm!");
	}
}