const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 3000,
	reset: false
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img,.slide-wrapper',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});


const list = document.querySelector('.slider');
console.log(list);
const imgs = document.getElementsByTagName('img');
const length = 3;
const slideWrapper = document.querySelector('.slide-wrapper');
const prev = document.querySelector('.btn-left');
const next = document.querySelector('.btn-right');
const dots = document.querySelectorAll('.dots');
let current = 0;

const slideChanger = () => {
	
	if(current == length - 1){
		current = 0;
		let width = slideWrapper.offsetWidth 
	console.log(width)
	list.style.transform = `translateX(0px)`

	document.querySelector('.active').classList.remove('active');
	document.querySelector('.dots-'+current).classList.add('active');
	}

	else {
	current++;
	let width = slideWrapper.offsetWidth 
	console.log(width)
	list.style.transform = `translateX(${width * -1 *current}px)`

	document.querySelector('.active').classList.remove('active');
	document.querySelector('.dots-'+current).classList.add('active');
}
}

//auto
let AutoSlide = setInterval(slideChanger,5000)

next.addEventListener('click',() => {
	clearInterval(AutoSlide)
	slideChanger();
	AutoSlide = setInterval(slideChanger,5000)
}
)

prev.addEventListener('click',()=>{
	clearInterval(AutoSlide)
	if(current == 0){
		current = length-1;
		let width = slideWrapper.offsetWidth 
	console.log(width)
	list.style.transform = `translateX(${width * -1 *current}px)`

	document.querySelector('.active').classList.remove('active');
	document.querySelector('.dots-'+current).classList.add('active');
	}

	else {
	current--;
	let width = slideWrapper.offsetWidth 
	console.log(width)
	list.style.transform = `translateX(${width * -1 *current}px)`

	document.querySelector('.active').classList.remove('active');
	document.querySelector('.dots-'+current).classList.add('active');
}
    AutoSlide = setInterval(slideChanger,5000)

})




const goToSlide = (index) => {
    clearInterval(AutoSlide); 
    current = index; 
    let width = slideWrapper.offsetWidth;
    list.style.transform = `translateX(${width * -1 * current}px)`;

    
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.dots-' + current).classList.add('active');

    AutoSlide = setInterval(slideChanger, 5000); 
};


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var orderButton = document.getElementById('orderButton');
        
        // Kiểm tra vị trí cuộn
        
		if (window.scrollY > 1000 || window.scrollY < 168) { // 100px là ví dụ, bạn có thể thay đổi
            orderButton.classList.add('orderHidden'); // Thêm lớp 'hidden'
        } else {
            orderButton.classList.remove('orderHidden'); // Xóa lớp 'hidden'
			reset: false
        }
		
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const itemsToSignup = document.querySelectorAll(".bx-cart"); // Chọn tất cả các phần tử có class itemtoSignup

    // Lặp qua từng item để gán sự kiện
    itemsToSignup.forEach(function(item) {
        item.addEventListener("click", function() {
            Swal.fire({
                title: "Cần phải đăng nhập để thêm sản phẩm vào giỏ hàng.",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Chuyển hướng tới trang login.html sau khi nhấn OK
                    window.location.href = "login.html";
                }
            });
        });
    });
});

window.setInterval(() => {
    try {
      let button = document.querySelector("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
      if (button) {
        // Đặt màu mặc định thành #00628F nếu chưa hover
        if (!button.classList.contains("hovering")) {
          button.style.backgroundColor = "#00628F";
        }
  
        // Thêm sự kiện hover
        button.addEventListener("mouseenter", function() {
          button.classList.add("hovering");
          button.style.backgroundColor = "#009CE3"; // Đổi màu khi hover
        });
  
        button.addEventListener("mouseleave", function() {
          button.classList.remove("hovering");
          button.style.backgroundColor = "#00628F"; // Đổi lại màu khi không hover
        });
      }
    }
    catch (error) {
      console.error("Lỗi:", error); // Xử lý lỗi nếu có
    }
}, 100);


document.addEventListener("DOMContentLoaded", function () {
    const userLogout = document.querySelectorAll(".userLogout"); // Chọn tất cả các phần tử có class userLogout
    userLogout.forEach(function(item) {
        item.addEventListener("click", function() {
            Swal.fire({
                title: "Bạn sẽ đăng xuất.",
                text: "Bạn chắc chứ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Có",
                cancelButtonText: "Huỷ"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Đăng xuất thành công!",
                    text: "Bạn đã đăng xuất.",
                    icon: "success"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        // Chuyển hướng tới trang login.html sau khi nhấn OK
                        window.location.href = "/PizzaViet/index.html";
                    }
                });
                }
              });
        });
    });
    
});
