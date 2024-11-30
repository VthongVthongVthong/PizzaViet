function lockUser(button) {
    const isLocked = button.getAttribute("data-locked") === "true";
    const row = button.closest('tr');
    const deleteButton = row.querySelector('.delete-btn');
    const editButton = row.querySelector('.edit');

    if (isLocked) {
        if (confirm("Bạn có chắc muốn mở khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-open-alt'></i>";
            button.setAttribute("data-locked", "false");
            button.style.backgroundColor = "white";
            button.style.color = "darkgray";
        }
    } else {
        if (confirm("Bạn có chắc muốn khóa người dùng này không?")) {
            button.innerHTML = "<i class='bx bxs-lock-alt'></i>";
            button.setAttribute("data-locked", "true");
            button.style.backgroundColor = "black";
            button.style.color = "white";

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

    const userId = row.cells[1]?.innerText || 'N/A';
    const username = row.cells[2]?.innerText || 'N/A';
    const fullName = row.cells[3]?.innerText || 'N/A';
    const address = row.cells[4]?.innerText || 'N/A';
    const email = row.cells[5]?.innerText || 'N/A';
    const role = row.cells[6]?.innerText || 'N/A';

    console.log(userId, username, fullName, address, email, role);

    if (!userId || !username) {
        alert("Dữ liệu người dùng không hợp lệ.");
        return;
    }

    document.getElementById('userId').value = userId;
    document.getElementById('username').value = username;
    document.getElementById('fullName').value = fullName;
    document.getElementById('address').value = address;
    document.getElementById('email').value = email;
    document.getElementById('role').value = role;

    document.getElementById('modal_container').style.display = 'block';
}


function updateUser() {
    const userId = document.getElementById('userId').value;
    const username = document.getElementById('username').value;
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    if (!userId || !username) {
        alert("Dữ liệu người dùng không hợp lệ.");
        return;
    }

    const rows = document.querySelectorAll('#Users_Table tbody tr');
    rows.forEach(row => {
        if (row.cells[1].innerText === userId) {
            row.cells[2].innerText = username;
            row.cells[3].innerText = fullName;
            row.cells[4].innerText = address;
            row.cells[5].innerText = email;
            row.cells[6].innerText = role;
        }
    });

    document.getElementById('modal_container').style.display = 'none';
}

document.getElementById('updateUserBtn').addEventListener('click', function(event) {
    updateUser();
});



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


function openAddUserModal() {
    document.getElementById('addUserModal').style.display = 'block';
}

function closeAddUserModal() {
    document.getElementById('addUserModal').style.display = 'none';
}

function addUser() {
    const username = document.getElementById('newUsername').value;
    const fullName = document.getElementById('newFullName').value;
    const address = document.getElementById('newAddress').value;
    const email = document.getElementById('newEmail').value;
    const role = document.getElementById('newRole').value;

    if (!username || !fullName || !address || !email || !role) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    const table = document.getElementById('Users_Table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const newId = table.rows.length;

    newRow.innerHTML = `
        <td><input type="checkbox" class="product-checkbox"></td>
        <td>${newId}</td>
        <td>${username}</td>
        <td>${fullName}</td>
        <td>${address}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>
            <button class="delete-btn" onclick="deleteUser(this)">Xóa</button>
            <button class="edit" onclick="openPopupUser(this)">Sửa</button>
            <button class="lock" onclick="lockUser(this)" data-locked="false"><i class='bx bxs-lock-open-alt'></i></button>
        </td>
    `;

    closeAddUserModal();
    document.getElementById('newUsername').value = '';
    document.getElementById('newFullName').value = '';
    document.getElementById('newAddress').value = '';
    document.getElementById('newEmail').value = '';
    document.getElementById('newRole').value = 'Khách hàng';
}

document.querySelector('.add_users').addEventListener('click', openAddUserModal);



