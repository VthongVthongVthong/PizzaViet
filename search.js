// Lấy icon và input tìm kiếm
const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

// Thêm sự kiện click vào icon để đóng/mở thanh tìm kiếm
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
    searchContainer.classList.toggle('active'); // Toggle class active
    if (searchContainer.classList.contains('active')) {
        searchInput.focus(); // Đặt focus vào thanh tìm kiếm khi mở
    } else {
        searchInput.value = ''; // Xóa nội dung khi đóng
    }
});

// Ngăn chặn sự kiện click trên thanh tìm kiếm để không đóng lại khi đang gõ từ khóa
searchInput.addEventListener('click', (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
});

// Đóng thanh tìm kiếm khi click ra ngoài, trừ khi click vào thanh tìm kiếm hoặc icon tìm kiếm
document.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target) && searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
        searchInput.value = ''; // Xóa nội dung khi đóng
    }
});

// Lắng nghe sự kiện nhấn phím Enter trong thanh tìm kiếm để thực hiện tìm kiếm
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Ngăn không cho form tự động submit
        searchFunction();
    }
});

function searchFunction() {
    // Lấy giá trị từ thanh tìm kiếm
    const query = searchInput.value.trim();

    // Kiểm tra nếu người dùng nhập từ khóa
    if (query) {
        // Chuyển hướng sang trang timkiem.html và truyền từ khóa tìm kiếm qua tham số query
        window.location.href = `timkiem.html?query=${encodeURIComponent(query)}`;
    } else {
        // Hiển thị cảnh báo nếu thanh tìm kiếm rỗng
        alert("Vui lòng nhập từ khóa để tìm kiếm!");
    }
}
