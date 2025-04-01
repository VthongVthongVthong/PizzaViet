function lockUser(button) {
    const isLocked = button.getAttribute("data-locked") === "true";
    const row = button.closest('tr');
    const deleteButton = row.querySelector('.delete-btn');
    const editButton = row.querySelector('.edit');

    if (isLocked) {
        if (confirm("Bạn có chắc muốn mở khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-open-alt'></i>";
            button.setAttribute("data-locked", "false");
        }
    } else {
        if (confirm("Bạn có chắc muốn khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-alt'></i>";
            button.setAttribute("data-locked", "true");

        }
    }
}

function deleteUser(button) {
    const row = button.closest('tr');
    const lockButton = row.querySelector('.lock');

    if (lockButton.getAttribute("data-locked") === "true") {
        alert("Vui lòng mở khóa để thực hiện hành động này.");
        return;
    }

    if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
        row.parentNode.removeChild(row);
    }
}

function openPopupUser(button) {
    const row = button.closest('tr');
    const lockButton = row.querySelector('.lock');

    if (lockButton.getAttribute("data-locked") === "true") {
        alert("Vui lòng mở khóa để chỉnh sửa.");
        return;
    }

    document.getElementById('modal_container').style.display = 'block';
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



