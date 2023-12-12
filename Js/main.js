$(".visual-items").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
  nextArrow: '<button class="slide-arrow next-arrow">></button>',
});

$(".visual02-items").slick({
  infinite: false,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
  nextArrow: '<button class="slide-arrow next-arrow">></button>',
});

$(document).ready(function () {
	$(".visual02-items").slick({
    infinite: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow">></button>',
	});
	$(".slick-list").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
	});
});

