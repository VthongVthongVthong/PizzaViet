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

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function(){
        console.log("X-Position: ", window.scrollX)
        console.log("Y-Position: ", window.scrollY) 
    })
})
