$(".visual-items").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slide-arrow prev-arrow"><img src="./image/main/img-pre-arr.png" alt="image-pre"></div>',
  nextArrow: '<div class="slide-arrow next-arrow"><img src="./image/main/img-next-arr.png" alt="image-next"></div>',
});

$(document).ready(function () {
	$(".visual02-items").slick({
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
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


