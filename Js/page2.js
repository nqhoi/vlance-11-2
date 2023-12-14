$(document).ready(function () {
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});


$(document).ready(function(){
  $("input").change(function(){
    alert("The text has been changed.");
  });
});

 // Sample data for sidebar
 var menuData = [
  { id: 'data1', label: 'Menu Item 1', contentFile: 'contentPage2.html' },
  { id: 'data2', label: 'Menu Item 2', contentFile: 'contentPage2-2.html' },
  { id: 'data3', label: 'Menu Item 3', contentFile: 'contentPage2-3.html' }
];

var sidebar = document.getElementById('sidebar').getElementsByTagName('ul')[0];
menuData.forEach(function (item, index) {
  var listItem = document.createElement('li');
  var link = document.createElement('a');
  link.href = '#';
  link.textContent = item.label;
  link.onclick = function () {
      loadContent(item.contentFile);
  };
  listItem.appendChild(link);
  sidebar.appendChild(listItem);

  if (index === 0) {
      loadContent(item.contentFile);
  }
});

function loadContent(file) {
  $.ajax({
      url: file,
      method: 'GET',
      success: function (data) {
          document.getElementById('dataDisplay').innerHTML = data;
      },
      error: function () {
          document.getElementById('dataDisplay').innerHTML = 'Error loading content.';
      }
  });
}

$(document).ready(function () {
  // Đối tượng headerBottomBox
  var $headerBottomBox = $("<div class='header-bottom-box'></div>");

  // Tạo mảng dữ liệu giả mạo
  var mockData = [
    ["데모", "데모", "데모", "데모", "데모", "데모"],
    ["데모", "데모"]
  ];

  // Lặp qua mảng dữ liệu giả mạo
  $.each(mockData, function (index, data) {
    // Tạo phần tử ul
    var $ul = $("<ul></ul>");

    // Lặp qua mảng dữ liệu con và tạo các phần tử li và a
    $.each(data, function (index, item) {
      var $li = $("<li><a href='#!' title='go to ...'>" + item + "</a></li>");

      // Thêm li vào ul
      $ul.append($li);
    });

    // Thêm ul vào headerBottomBox
    $headerBottomBox.append($ul);
  });

  // Đặt nội dung của headerBottomBox vào body (hoặc bất kỳ nơi nào bạn muốn)
  $(".header-bottom-wrap").append($headerBottomBox);
});

