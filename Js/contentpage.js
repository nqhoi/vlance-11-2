$(document).ready(function () {
  // Đối tượng ul gốc
  var $ulRoot = $("<ul></ul>");

  // Tạo mảng dữ liệu giả mạo
  var mockData = [
    {
      title: "Tét",
      items: [
        {
          title: "데모",
          items: [
            { title: "데모", content: ["데모", "AAAAAA"] },
            {
              title: "데모 2",
              items: [
                {
                  title: "데모",
                  content: ["데모 SFEP", "데모 SFEP"],
                },
                {
                  title: "데모",
                  content: ["데모 SFEP", "데모 SFEP"],
                },
                {
                  title: "데모",
                  content: ["데모 SFEP", "데모 SFEP"],
                },
              ],
              description: "( 데모데모 )",
            },
          ],
        },
        {
          title: "데모",
          description: "데모",
        },
        {
          title: "데모",
          description: "데모",
        },
        {
          title: "데모",
          items: [
            {
              title: "데모",
              content: [
                "<span>데모데모데모데모데모데모데모 데모데모데모데모데모데모 데모데모데모데모데모데모데모 데모데모데모데모데모데모 데모데모데모데모데모데모데모 데모데모데모데모데모데모데모 데모데모데모데모데모데모데모 데모데모데모데모데모데모</span>",
              ],
            },
            {
              title: "데모",
              content: [
                "<span>데모데모데모데모데모데모데모 데모데</span>",
                {
                  title: "데모",
                  items: ["<li>데모데모</li>", "<li>데모데모</li>"],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Gọi hàm đệ quy để tạo cấu trúc DOM
  buildList($ulRoot, mockData);

  // Đặt nội dung của ulRoot vào body (hoặc bất kỳ nơi nào bạn muốn)
  $("body").append($ulRoot);

  // Hàm đệ quy để xây dựng cấu trúc DOM từ mảng dữ liệu
  function buildList($parent, data) {
    $.each(data, function (index, item) {
      var $li = $("<li></li>");

      if (item.title) {
        var $title = $(
          "<h" + (index + 2) + ">" + item.title + "</h" + (index + 2) + ">"
        );
        $li.append($title);
      }

      if (item.content) {
        if (Array.isArray(item.content)) {
          var $ulContent = $("<ul></ul>");
          $.each(item.content, function (contentIndex, contentItem) {
            if (typeof contentItem === "string") {
              var $liContent = $("<li>" + contentItem + "</li>");
              $ulContent.append($liContent);
            } else if (typeof contentItem === "object") {
              buildList($ulContent, [contentItem]);
            }
          });
          $li.append($ulContent);
        } else {
          $li.append($("<div>").html(item.content));
        }
      }

      if (item.items) {
        var $ulItems = $("<ul></ul>");
        buildList($ulItems, item.items);
        $li.append($ulItems);
      }

      if (item.description) {
        $li.append($("<p>" + item.description + "</p>"));
      }

      $parent.append($li);
    });
  }
});
