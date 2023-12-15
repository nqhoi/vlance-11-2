$(document).ready(function () {
	$(".visual02-items").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<div class="slide-arrow prev-arrow"><img src="./image/main/img-banner-pre-arr.gif" alt="image-pre"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><img src="./image/main/img-banner-arr.gif" alt="image-next"></div>',
	});
	$(".slick-list").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
	});
});


function toggleSlider() {
  const slider = document.querySelector('.quick-menu-box .menu-data');
  slider.style.visibility = (slider.style.display === 'hidden' || slider.style.display === '' ) && slider.classList.toggle('hide')
}