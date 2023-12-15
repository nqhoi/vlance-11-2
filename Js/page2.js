$(document).ready(function () {
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
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
  const $headerBottomBox = $("<div class='header-bottom-box'></div>");

  var mockData = [
    ["데모", "데모", "데모", "데모", "데모", "데모"],
    ["데모", "데모"]
  ];

  $.each(mockData, function (index, data) {
    var $ul = $("<ul></ul>");

    $.each(data, function (index, item) {
      var $li = $("<li><a href='#!' title='go to ...'>" + item + "</a></li>");

      $ul.append($li);
    });

    $headerBottomBox.append($ul);
  });

  $(".header-bottom-wrap").append($headerBottomBox);
});

