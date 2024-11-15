
		// Lấy icon và input tìm kiếm
		const searchIcon = document.querySelector('.search-icon');
		const searchContainer = document.querySelector('.search-container');
	
		// Thêm sự kiện click vào icon
		searchIcon.addEventListener('click', () => {
			searchContainer.classList.toggle('active'); // Toggle class active
		});
