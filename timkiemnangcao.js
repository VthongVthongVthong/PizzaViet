let result = document.getElementById('result');
let object = [
    {
        name: "Pizza Hải Sản Xốt Mayonnaise Hảo Hạng",
        price: "185,000₫",
        description: "Hải sản tươi ngon với sốt mayonnaise béo ngậy.",
        image: "img/d1.jpg",
        link: "menu/detail/Detail1.html"
    },
    {
        name: "Pizza New York Beefsteak Phô Mai",
        price: "215,000₫",
        description: "Thịt Bò New York Thơm Ngon Kết Hợp Phô Mai béo ngậy.",
        image: "img/d2.jpg",
        link: "menu/detail/Detail2.html"
    },
    {
        name: "Pizza Siêu Topping Xúc Xích Ý Truyền Thống",
        price: "195,000₫",
        description: "Xúc xích Ý Truyền Thống Với Nhiều Topping Hấp Dẫn.",
        image: "img/d3.jpg",
        link: "menu/detail/Detail3.html"
    },
    {
        name: "Pizza Siêu Topping Hải Sản Xốt Mayonnaise",
        price: "205,000₫",
        description: "Hải sản tươi với sốt mayonnaise và nhiều topping phong phú.",
        image: "img/d4.jpg",
        link: "menu/detail/Detail4.html"
    },
    {
        name: "Pizza Thập Cẩm Thượng Hạng",
        price: "205,000₫",
        description: "Pizza Thập Cẩm Với Tổng Hợp Topping Quá Hấp Dẫn.",
        image: "img/d5.jpg",
        link: "menu/detail/Detail5.html"
    },
    {
        name: "Pizza Thập Cẩm Rau Củ Vị Chay",
        price: "155,000₫",
        description: "Tổng hợp nhiều loại rau củ phù hợp với việc ăn chay.",
        image: "img/d6.jpg",
        link: "menu/detail/Detail6.html"
    },
    {
        name: "Pizza Phô Mai Truyền Thống",
        price: "175,000₫",
        description: "Pizza cổ điển phong cách Ý ngập phô mai ngậy tuyệt đối.",
        image: "img/d7.jpg",
        link: "menu/detail/Detail7.html"
    },
    {
        name: "Pizza Dăm Bông Dứa Kiểu Hawaii",
        price: "175,000₫",
        description: "Vị thịt dăm bông kết hợp dứa theo phong cách Hawaii.",
        image: "img/d8.jpg",
        link: "menu/detail/Detail8.html"
    },
    {
        name: "Pizza Ngập Vị Phô Mai Hảo Hạng",
        price: "185,000₫",
        description: "Hương vị phô mai thơm và béo.",
        image: "img/d9.jpg",
        link: "menu/detail/Detail9.html"
    },
    {
        name: "Pizza 5 Loại Thịt Thượng Hạng",
        price: "155,000₫",
        description: "Tổng hợp 5 loại topping vị thịt ngon khó cưỡng.",
        image: "img/d10.jpg",
        link: "menu/detail/Detail10.html"
    },
    {
        name: "Pizza Hải Sản Nhiệt Đới Xốt Tiêu",
        price: "205,000₫",
        description: "Hương vị từ vùng biển nhiệt đới hòa quyện xốt tiêu cay nồng.",
        image: "img/d11.jpg",
        link: "menu/detail/Detail11.html"
    },
    {
        name: "Pizza Hải Sản Xốt Cà Chua",
        price: "205,000₫",
        description: "Hương vị biển xốt cà chua ngon nức lòng.",
        image: "img/d12.jpg",
        link: "menu/detail/Detail12.html"
    },
    {
        name: "Nước ngọt chai CocaCola",
        price: "20,000₫",
        description: "",
        image: "img/n1.jpg",
        link: "menu/detail/Detail13.html"
    },
    {
        name: "Nước ngọt chai Fanta",
        price: "25,000₫",
        description: "",
        image: "img/n2.jpg",
        link: "menu/detail/Detail14.html"
    },
    {
        name: "Nước ngọt chai Sprite",
        price: "15,000₫",
        description: "",
        image: "img/n3.jpg",
        link: "menu/detail/Detail15.html"
    },
    {
        name: "Nước lọc Dasani",
        price: "10,000₫",
        description: "",
        image: "img/n4.jpg",
        link: "menu/detail/Detail16.html"
    }
];

function searchProducts(query) {
    let filteredProducts = object.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    displayResults(filteredProducts);
}

function displayResults(products) {
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

document.querySelector('.search-icon').addEventListener('click', function() {
    let query = document.querySelector('.search-input').value.trim();
    if (query) {
        searchProducts(query);
    } else {
        result.innerHTML = `<h2>Vui lòng nhập từ khóa để tìm kiếm.</h2>`;
    }
});

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