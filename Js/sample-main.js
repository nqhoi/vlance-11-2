$(document).ready(function () {
  $(".visual02-items").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><img src="./image/iii/icon-prev-gray.png" alt="prev slider"></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><img src="./image/iii/icon-next-gray.png" alt="next slider"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

function headerSticky() {
  const heightHeader = 85;
  if (window.pageYOffset > heightHeader) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
}

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

function toggleSlider() {
  var menuData = document.querySelector(".quick-menu-box");
  menuData.classList.toggle("active");
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

  document.body.addEventListener("click", function (event) {
    if (!event.target.closest(".header-menu") && activeDropdown) {
      activeDropdown.style.display = "none";
      activeDropdown = null;
    }
  });
}


// Toggle the dropdown menu on hover
// $(document).ready(function () {
//   $(".header-menu li").hover(function () {
//     $(this).find(".dropdown-menu").toggle();
//   });
//   //Prevent the dropdown from disappearing when moving from the menu title to the dropdown
//   $(".header-menu li .dropdown-menu").hover(function () {
//     $(this).toggle();
//   });
// });

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
  menu.style.display = menu.style.display === "block" ? "none" : "block";
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
  typ05: [
    "학사안내 1",
    "학사안내 2",
    "학사안내 3",
    "학사안내 1",
    "학사안내 2",
    "학사안내 3",
  ],
  typ06: ["대학생활 1", "대학생활 2", "대학생활 3"],
};

// Function to generate the menu items
function generateMenu(type, items) {
  var dropdown = $(".dropdown-menu." + type + " ul");
  dropdown.empty();
  $.each(items, function (index, item) {
    dropdown.append(
      '<li><a href="#" title="' + item + '"><h4>' + item + "</h4></a></li>"
    );
  });
}

// Initial data population
$.each(menuData, function (type, items) {
  generateMenu(type, items);
});

var sidebarData = {
  학습정보: [
    {
      title:
        "title for 학습정보. This is some detailed information about 학습정보.",
      desc: "desc data for 학습정보. Additional details for 학습정보.",
      date: "2023.02.01",
    },
    {
      title:
        "title for 학습정보. This is some detailed information about 학습정보.",
      desc: "desc data for 학습정보. Additional details for 학습정보.",
      date: "2023.02.01 2",
    },
    {
      title:
        "title for 학습정보. This is some detailed information about 학습정보.",
      desc: "desc data for 학습정보. Additional details for 학습정보.",
      date: "2023.02.01",
    },
  ],
  "사이트맵 2": [
    {
      title:
        "title for 사이트맵 2. This is some detailed information about 사이트맵 2.",
      desc: "desc data for 사이트맵 2. Additional details for 사이트맵 2.",
      date: "2022.10.15",
    },
    {
      title:
        "title for 사이트맵 2. This is some detailed information about 사이트맵 2.",
      desc: "desc data for 사이트맵 2. Additional details for 사이트맵 2.",
      date: "2022.10.15",
    },
  ],
  소식: [
    {
      title: "title for 소식. This is some detailed information about 소식.",
      desc: "desc data for 소식. Additional details for 소식.",
      date: "2022.10.15",
    },
  ],
  "업무 설명서": [
    {
      title:
        "title for 업무 설명서. This is some detailed information about 업무 설명서.",
      desc: "desc data for 업무 설명서. Additional details for 업무 설명서.",
      date: "2022.20.01",
    },
  ],
};

function showSidebarData(data) {
  $.each(data, function (index, item) {
    $(".sidebar-data").append(
    `<li>
      <a href="#!" title="go to">
        <h3>${item.title}</h3>
      </a>
      <p>${item.desc}</p>
      <span>${item.date}</span>
    </li>`
    );
  });
}

// Document ready function
$(document).ready(function () {
  var defaultData = Object.values(sidebarData)[0];
  showSidebarData(defaultData);

  $(".sidebar > ul > li").click(function (e) {
    e.preventDefault();

    const title = $(this).text();

    const data = sidebarData[title];
    $(".sidebar-data").empty();

    showSidebarData(data);
  });
});
