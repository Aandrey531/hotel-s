let btn_menu = document.querySelector(".btn_menu");
let nav_menu = document.querySelector("#nav_menu");
let login = document.querySelector("#login");
let nav = document.querySelector("#nav");

btn_menu.addEventListener("click", openMenu);


function openMenu() {
	btn_menu.classList.toggle("trans");
	login.classList.toggle("none");
	nav_menu.classList.toggle("none")
}


$(document).ready(function() {
	$('.container_sec_seven').slick({
		infinite: true,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		slidesToScroll: 5,
		speed: 2000,
		arrows: false,
		responsive: [
    {
      breakpoint: 992,
      settings: {
        	infinite: true,
			slidesToShow: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			slidesToScroll: 3,
			speed: 2000,
			arrows: false
        }
    },
    {
      breakpoint: 600,
      settings: {
       		infinite: true,
			slidesToShow: 2,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			slidesToScroll: 2,
			speed: 2000,
			arrows: false
      }
    },
    ]
	});

	$('#slider_box').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			speed: 1000
		});

	AOS.init();
	$("#notification").on("click", function() {
		Swal.fire('Good job!','You clicked the button!','success');
	});
});
