
function lockUser(button) {
    const isLocked = button.getAttribute("data-locked") === "true";

    if (isLocked) {
        if (confirm("Bạn có chắc muốn mở khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-open-alt' ></i>";
            button.setAttribute("data-locked", "false");
        }
    } else {
        if (confirm("Bạn có chắc muốn khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-alt'></i>";
            button.setAttribute("data-locked", "true");
        }
    }
}
// Xoa nguoi dung
function deleteUser(button) {
    if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
        const row = button.closest('tr');
        row.parentNode.removeChild(row);
    }
}

function toggleAllUsers(source) {
    const checkboxes = document.querySelectorAll('#Users_Table .product-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Xoa selected nguoi dung
function deleteSelectedUsers() {
    const checkboxes = document.querySelectorAll('#Users_Table .product-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("Vui lòng chọn ít nhất một người để xóa.");
        return;
    }
    if (confirm("Bạn có chắc chắn muốn xóa các người dùng đã chọn?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            row.parentNode.removeChild(row);
        });
    }
}

function openPopup() {
    document.getElementById('modal_container').style.display = 'block';
}
