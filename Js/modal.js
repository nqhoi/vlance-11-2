// Get the modal
var modal = document.getElementById("myModal");

$(document).ready(function () {
  $(".bottom-wrap-box > ul > li").hover(function () {
    modal.style.display = "block";
  });
});

window.onclick = function (event) {
  console.log(event)
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(function () {
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

$(document).ready(function () {
  $(document).on("scroll", function () {
    const positionFooter = $(".footer-bottom-box-con").offset()
    console.log(positionFooter.top, $(this).scrollTop())
    if ($(this).scrollTop() < positionFooter.top) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });

});
