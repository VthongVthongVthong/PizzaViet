// // Toggle display of product options
// function toggleProductOptions() {
//     const productOptions = document.getElementById('productOptions');
//     productOptions.style.display = productOptions.style.display === 'none' ? 'block' : 'none';
// }

// Delete individual product in Food table
function deleteFoodProduct(button) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        const row = button.closest('tr');
        row.parentNode.removeChild(row);
    }
}

// Delete individual product in Drink table
function deleteDrinkProduct(button) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        const row = button.closest('tr');
        row.parentNode.removeChild(row);
    }
}

// Toggle all checkboxes in Food table
function toggleAllFood(source) {
    const checkboxes = document.querySelectorAll('#productTable_Food .product-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Toggle all checkboxes in Drink table
function toggleAllDrink(source) {
    const checkboxes = document.querySelectorAll('#productTable_Drink .product-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Delete selected products in Food table
function deleteSelectedFood() {
    const checkboxes = document.querySelectorAll('#productTable_Food .product-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
        return;
    }
    if (confirm("Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            row.parentNode.removeChild(row);
        });
    }
}

// Delete selected products in Drink table
function deleteSelectedDrink() {
    const checkboxes = document.querySelectorAll('#productTable_Drink .product-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
        return;
    }
    if (confirm("Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            row.parentNode.removeChild(row);
        });
    }
}
// Hàm đóng popup
function closePopup() {
    document.getElementById('modal_container').style.display = 'none';
}

// Hàm mở popup (nếu cần)
function openPopup() {
    document.getElementById('modal_container').style.display = 'block';
}
function toggleProductOptions() {
    const productOptions = document.getElementById('productOptions');
    if (productOptions.style.display === 'none' || productOptions.style.display === '') {
        productOptions.style.display = 'block';
    } else {
        productOptions.style.display = 'none';
    }
}

function showAddProductForm() {
    document.getElementById('addProductForm').style.display = 'block';
    document.getElementById('productList').style.display = 'none';
}

function showEditProduct() {
    alert('Chức năng sửa sản phẩm chưa được thực hiện.');
}

function showDeleteProduct() {
    alert('Chức năng xóa sản phẩm chưa được thực hiện.');
}


const statusFilter = document.getElementById('statusFilter');
const orderRows = document.querySelectorAll('tbody tr'); 

function filterOrder() {
    const filterValue = statusFilter.value;

    orderRows.forEach(row => {
        const orderStatus = row.dataset.status; 

        if (filterValue === 'all' || orderStatus === filterValue) {
            row.classList.remove('hidden'); 
        } else {
            row.classList.add('hidden'); 
        }
    });
}

statusFilter.addEventListener('change', filterOrder);

filterOrder();
