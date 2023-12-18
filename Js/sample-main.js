$(document).ready(function () {
  $(".visual02-items").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><img src="./image/iii/icon-prev-gray.png" alt="prev slider"></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><img src="./image/iii/icon-next-gray.png" alt="next slider"></div>',
  });
  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
  });
});

$(document).ready(function () {
  $(".visual-items").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><img src="./image/main/img-pre-arr.png" alt="image-pre"></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><img src="./image/main/img-next-arr.png" alt="next-visual"></div>',
  });
  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
  });
});

$(document).ready(function () {
  $(".visual04-items").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><img src="./image/main/img-pre-arr.png" alt="image-pre"></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><img src="./image/main/img-next-arr.png" alt="next-visual"></div>',
  });
  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
  });
});

$(document).ready(function () {
  $(".visual03-items").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><img src="./image/iii/icon-prev-gray.png" alt="prev slider"></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><img src="./image/iii/icon-next-gray.png" alt="next slider"></div>',
  });

  $(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
  });
});

window.onscroll = function () {
  headerSticky();
};

//change English to Korean
$(document).ready(function () {
  $(".header-right-box > ul >li:nth-child(3) a").click(function () {
    const currentText = $(this).text();
    if (currentText === "EngLish") {
      $(this).text("Korean");
    } else {
      $(this).text("EngLish");
    }
  });
});

function headerSticky() {
  const heightHeader = 85;
  if (window.pageYOffset > heightHeader) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
}

// $(document).ready(function () {
//   $(".header-menu > ul > li").click(function () {});
// });

// function toggleSlider1() {
//   const slider = document.querySelector(".quick-menu-box.type01 .menu-data");
//   slider.style.visibility =
//     (slider.style.visibility === "hidden" || slider.style.visibility === "") &&
//     slider.classList.toggle("hide");
// }

function toggleSlider1() {
  var menuData = document.querySelector('.quick-menu-box.type01 .menu-data');
  menuData.classList.toggle('active');
}

function toggleSlider2() {
  var menuData = document.querySelector('.quick-menu-box.type02 .menu-data');
  menuData.classList.toggle('hidden');
}

var activeDropdown = null;
function toggleMenu(menuType) {
  var newDropdown = document.querySelector(".dropdown-menu." + menuType);

  if (activeDropdown) {
    activeDropdown.style.display = "none";
  }

  if (activeDropdown !== newDropdown) {
    newDropdown.style.display = "block";
    activeDropdown = newDropdown;
  } else {
    activeDropdown = null;
  }

  document.body.addEventListener('click', function (event) {
    if (!event.target.closest('.header-menu') && activeDropdown) {
      activeDropdown.style.display = 'none';
      activeDropdown = null;
    }
  });
}

$(document).ready(function () {
  // Toggle the dropdown menu on hover
  $(".header-menu li").hover(function () {
    $(this).find(".dropdown-menu").toggle();
  });

  // Prevent the dropdown from disappearing when moving from the menu title to the dropdown
  // $(".header-menu li .dropdown-menu").hover(function () {
  //   $(this).toggle();
  // });
});

// Footer dropdown
$(document).ready(function () {
  $(".footer-bottom-box .right-box").click(function () {
    $(".footer-bottom-box .right-box .right-box-dropdown").toggle();
  });
});

// Footer dropdown
$(document).on("click", function (event) {
  const dropdown = $(".footer-bottom-box .right-box");
  if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
    $(".footer-bottom-box .right-box .right-box-dropdown").hide();
  }
});

function toggleMobileMenu() {
  var menu = document.querySelector(".header-menu");
  menu.style.display =
    menu.style.display === "block"
      ? "none"
      : "block";
}

document
  .querySelector(".header-menu-tablet")
  .addEventListener("click", toggleMobileMenu);
// document.querySelector('.header-menu').addEventListener('click', toggleMobileMenu);


var menuData = {
  typ01: ["사이트맵 1", "사이트맵 2", "사이트맵 3", "사이트맵 4"],
  typ02: ["대학생활 1", "대학생활 2", "대학생활 3", "대학생활 4", "대학생활 5"],
  typ03: ["대학·대학원 1", "대학·대학원 2", "대학·대학원 3"],
  typ04: ["연구·산학 1", "연구·산학 2", "연구·산학 3"],
  typ05: ["학사안내 1", "학사안내 2", "학사안내 3", "학사안내 1", "학사안내 2", "학사안내 3"],
  typ06: ["대학생활 1", "대학생활 2", "대학생활 3"]
};

// Function to generate the menu items
function generateMenu(type, items) {
  var dropdown = $('.dropdown-menu.' + type + ' ul');
  dropdown.empty();
  $.each(items, function(index, item) {
    dropdown.append('<li><a href="#" title="' + item + '"><h4>' + item + '</h4></a></li>');
  });
}

 // Initial data population
 $.each(menuData, function(type, items) {
  generateMenu(type, items);
});
