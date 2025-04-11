let result = document.getElementById('result');
let object = [
    {
        name: "Pizza Hải Sản Xốt Mayonnaise Hảo Hạng",
        price: "185,000₫",
        description: "Hải sản tươi ngon với sốt mayonnaise béo ngậy.",
        image: "img/d1.jpg",
        link: "pages_user/menu/detail/Detail1_user.html",
        type: "pizza",
        category: "seafood"
    },
    {
        name: "Pizza New York Beefsteak Phô Mai",
        price: "215,000₫",
        description: "Thịt Bò New York Thơm Ngon Kết Hợp Phô Mai béo ngậy.",
        image: "img/d2.jpg",
        link: "pages_user/menu/detail/Detail2_user.html",
        type: "pizza",
        category: "beef"
    },
    {
        name: "Pizza Siêu Topping Xúc Xích Ý Truyền Thống",
        price: "195,000₫",
        description: "Xúc xích Ý Truyền Thống Với Nhiều Topping Hấp Dẫn.",
        image: "img/d3.jpg",
        link: "pages_user/menu/detail/Detail3_user.html",
        type: "pizza",
        category: "pork"
    },
    {
        name: "Pizza Siêu Topping Hải Sản Xốt Mayonnaise",
        price: "205,000₫",
        description: "Hải sản tươi với sốt mayonnaise và nhiều topping phong phú.",
        image: "img/d4.jpg",
        link: "pages_user/menu/detail/Detail4_user.html",
        type: "pizza",
        category: "seafood"
    },
    {
        name: "Pizza Thập Cẩm Thượng Hạng",
        price: "205,000₫",
        description: "Pizza Thập Cẩm Với Tổng Hợp Topping Quá Hấp Dẫn.",
        image: "img/d5.jpg",
        link: "pages_user/menu/detail/Detail5_user.html",
        type: "pizza",
        category: "pork"
    },
    {
        name: "Pizza Thập Cẩm Rau Củ Vị Chay",
        price: "155,000₫",
        description: "Tổng hợp nhiều loại rau củ phù hợp với việc ăn chay.",
        image: "img/d6.jpg",
        link: "pages_user/menu/detail/Detail6_user.html",
        type: "pizza",
        category: "vegetarian"
    },
    {
        name: "Pizza Phô Mai Truyền Thống",
        price: "175,000₫",
        description: "Pizza cổ điển phong cách Ý ngập phô mai ngậy tuyệt đối.",
        image: "img/d7.jpg",
        link: "pages_user/menu/detail/Detail7_user.html",
        type: "pizza",
        category: "vegetarian"
    },
    {
        name: "Pizza Dăm Bông Dứa Kiểu Hawaii",
        price: "175,000₫",
        description: "Vị thịt dăm bông kết hợp dứa theo phong cách Hawaii.",
        image: "img/d8.jpg",
        link: "pages_user/menu/detail/Detail8_user.html",
        type: "pizza",
        category: "pork"
    },
    {
        name: "Pizza Ngập Vị Phô Mai Hảo Hạng",
        price: "185,000₫",
        description: "Hương vị phô mai thơm và béo.",
        image: "img/d9.jpg",
        link: "pages_user/menu/detail/Detail9_user.html",
        type: "pizza",
        category: "vegetarian"
    },
    {
        name: "Pizza 5 Loại Thịt Thượng Hạng",
        price: "155,000₫",
        description: "Tổng hợp 5 loại topping vị thịt ngon khó cưỡng.",
        image: "img/d10.jpg",
        link: "pages_user/menu/detail/Detail10_user.html",
        type: "pizza",
        category: "pork"
    },
    {
        name: "Pizza Hải Sản Nhiệt Đới Xốt Tiêu",
        price: "205,000₫",
        description: "Hương vị từ vùng biển nhiệt đới hòa quyện xốt tiêu cay nồng.",
        image: "img/d11.jpg",
        link: "pages_user/menu/detail/Detail11_user.html",
        type: "pizza",
        category: "seafood"
    },
    {
        name: "Pizza Hải Sản Xốt Cà Chua",
        price: "205,000₫",
        description: "Hương vị biển xốt cà chua ngon nức lòng.",
        image: "img/d12.jpg",
        link: "pages_user/menu/detail/Detail12_user.html",
        type: "pizza",
        category: "seafood"
    },
    {
        name: "Nước ngọt chai CocaCola",
        price: "20,000₫",
        description: "",
        image: "img/n1.jpg",
        link: "pages_user/menu/detail/Detail13_user.html",
        type: "drink",
        category: "beverage"
    },
    {
        name: "Nước ngọt chai Fanta",
        price: "25,000₫",
        description: "",
        image: "img/n2.jpg",
        link: "pages_user/menu/detail/Detail14_user.html",
        type: "drink",
        category: "beverage"
    },
    {
        name: "Nước ngọt chai Sprite",
        price: "15,000₫",
        description: "",
        image: "img/n3.jpg",
        link: "pages_user/menu/detail/Detail15_user.html",
        type: "drink",
        category: "beverage"
    },
    {
        name: "Nước lọc Dasani",
        price: "10,000₫",
        description: "",
        image: "img/n4.jpg",
        link: "pages_user/menu/detail/Detail16_user.html",
        type: "drink",
        category: "beverage"
    }
];

// Hàm tìm kiếm sản phẩm theo từ khóa và áp dụng các bộ lọc
function searchProducts(query) {
    // Lấy giá trị từ các bộ lọc
    const priceValue = document.getElementById('price-filter').value;
    const typeValue = document.getElementById('type-filter').value;
    const categoryValue = document.getElementById('category-filter').value;
    
    // Lọc sản phẩm theo tất cả các điều kiện
    let filteredProducts = object.filter(product => {
        let matchesPrice = true;
        let matchesType = true;
        let matchesCategory = true;
        let matchesSearch = true;
        
        // Chỉ áp dụng tìm kiếm nếu có query
        if (query) {
            matchesSearch = product.name.toLowerCase().includes(query.toLowerCase()) || 
                            product.description.toLowerCase().includes(query.toLowerCase());
        }

        // Lọc theo giá
        if (priceValue === 'low') {
            matchesPrice = parseInt(product.price.replace(/[^0-9]/g, '')) < 100000;
        } else if (priceValue === 'medium') {
            matchesPrice = parseInt(product.price.replace(/[^0-9]/g, '')) >= 100000 && 
                          parseInt(product.price.replace(/[^0-9]/g, '')) <= 200000;
        } else if (priceValue === 'high') {
            matchesPrice = parseInt(product.price.replace(/[^0-9]/g, '')) > 200000;
        }

        // Lọc theo loại
        if (typeValue !== 'all') {
            matchesType = product.type === typeValue;
        }

        // Lọc theo danh mục
        if (categoryValue !== 'all') {
            matchesCategory = product.category === categoryValue;
        }

        // Kết hợp tất cả các điều kiện (AND logic)
        return matchesSearch && matchesPrice && matchesType && matchesCategory;
    });
    
    displayResults(filteredProducts, query);
}

function displayResults(products, query) {
    result.innerHTML = "";
    if (products.length === 0) {
        result.innerHTML = `<h2>Không tìm thấy sản phẩm phù hợp.</h2>`;
        return;
    }
    
    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <a href="${product.link}">
                <img src="${product.image}" alt="${product.name}">
                <div class="menu-text">
                    <div class="menu-left">
                        <h4 class="contentName">${product.name}</h4>
                    </div>
                    <div class="menu-right">
                        <h5>${product.price}</h5>
                    </div>
                </div>
                <p class="contentDescribe">${product.description}</p>
                <div class="star">
                    <a href="#"><i class='bx bxs-star'></i></a>
                    <a href="#"><i class='bx bxs-star'></i></a>
                    <a href="#"><i class='bx bxs-star'></i></a>
                    <a href="#"><i class='bx bxs-star'></i></a>
                    <a href="#"><i class='bx bxs-star'></i></a>
                </div>
            </a>
        `;
        result.appendChild(productElement);
    });
}

// Áp dụng bộ lọc và luôn xem xét từ khóa đang có trong thanh tìm kiếm
function applyFilters() {
    const searchQuery = document.querySelector('.search-input').value.trim();
    // Luôn gọi searchProducts, và truyền searchQuery vào
    searchProducts(searchQuery);
}

document.addEventListener('DOMContentLoaded', function () {
    // Thêm sự kiện cho nút tìm kiếm
    document.querySelector('.search-icon').addEventListener('click', function() {
        let query = document.querySelector('.search-input').value.trim();
        if (query) {
            searchProducts(query);
        } else {
            result.innerHTML = `<h2>Vui lòng nhập từ khóa để tìm kiếm.</h2>`;
        }
    });

    // Thêm sự kiện khi nhấn Enter trong ô tìm kiếm
    document.querySelector('.search-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            let query = this.value.trim();
            if (query) {
                searchProducts(query);
            } else {
                result.innerHTML = `<h2>Vui lòng nhập từ khóa để tìm kiếm.</h2>`;
            }
        }
    });

    // Thêm sự kiện cho các nút bộ lọc
    const applyFiltersButton = document.getElementById('apply-filters');
    const resetFiltersButton = document.getElementById('reset-filters');

    applyFiltersButton.addEventListener('click', function() {
        applyFilters();
    });

    resetFiltersButton.addEventListener('click', function() {
        document.getElementById('price-filter').value = 'all';
        document.getElementById('type-filter').value = 'all';
        document.getElementById('category-filter').value = 'all';
        document.querySelector('.search-input').value = ''; // Xóa nội dung tìm kiếm
        displayResults(object); // Hiển thị tất cả sản phẩm
    });

    // Hiển thị tất cả sản phẩm khi trang được tải
    displayResults(object);
});