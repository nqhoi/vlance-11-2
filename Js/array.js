// JavaScript array
let mockDataNotices = [
  {
    category: "데모",
    categoryDesc: "데모 Description",
  },
  {
    category: "데모",
    categoryDesc: "데모 Description",
  },
  {
    category: "데모",
    categoryDesc: "데모 Description",
  },
];

let mockDataEvents = [
  {
    category: "데모 06",
    categoryDesc: "데모 Description",
    categorySubDesc: "데모 Sub Description",
  },
  {
    category: "데모 06",
    categoryDesc: "데모 Description",
    categorySubDesc: "데모 Sub Description",
  },
  {
    category: "데모 06",
    categoryDesc: "데모 Description",
    categorySubDesc: "데모 Sub Description",
  },
];

let mockDataNews = [
  {
    image: "./image/main/img-thumb01.jpg",
    title: "데모 title",
    description: "데모 Sub Description",
  },
  {
    image: "./image/main/img-thumb02.jpg",
    title: "데모 title",
    description: "데모 Sub Description",
  },
  {
    image: "./image/main/img-thumb03.jpg",
    title: "데모 title",
    description: "데모 Sub Description",
  },
];

const mockDataMenu = [
  {
    category: "데모 1",
    items: [
      "Name item",
      "Name item",
      "Name item",
      "Name item",
      "Name item",
      "Name item",
    ],
  },
  { category: "데모 2", items: ["Name item", "Name item", "Name item"] },
  { category: "데모 3", items: ["Name item", "Name item", "Name item"] },
  { category: "데모 4", items: ["Name item", "Name item", "Name item"] },
  { category: "데모 4", items: ["Name item", "Name item", "Name item"] },
  { category: "데모 4", items: ["Name item", "Name item", "Name item"] },
  { category: "데모 4", items: ["Name item", "Name item", "Name item"] },
];

const mockDataFooter = {
  category1: ["Footer", "Footer", "Footer", "Footer"],
  category2: ["Footer2", "Footer2", "Footer2", "Footer2"],
  category3: ["Footer3", "Footer3", "Footer3", "Footer3"],
  category4: ["Footer4", "Footer4", "Footer4", "Footer4"],
};

let contentBoxNoticesElement = document.getElementById("content-box-notices");
let contentBoxEventElement = document.getElementById("content-box-event");
let contentBoxNewsElement = document.getElementById("content-box-news");
let modalMenuElement = document.getElementById("modal-menu");
let footerBoxElement = document.getElementById("footer-box");

let contentBoxNotices = `
  <h2>NOTICES</h2>
  <ul>${mockDataNotices.map((data) => `
    <li>
      <span>${data.category}</span>
      <p>${data.categoryDesc}</p>
    </li>`
    ).join("")}
  </ul>`;

let contentBoxEvent = `
  <h2>EVENTS</h2>
  <ul>${mockDataEvents.map((data) => `
    <li><span>${data.category}</span>
    <div>
      <p>${data.categoryDesc}</p>
      <span>${data.categoryDesc}</span>
    </div>
    </li>`
  ).join("")}
  </ul>`;

let contentBoxNews = `
  ${mockDataNews.map(
    (data) => `
    <li><a href="#!" title="go to Image"><img src=${data.image} alt="image-demo2"></a>
      <div>
        <a href="#!" title="go to content">
          <h4>${data.title}</h4>
        </a>
        <p>${data.description}</p>
      </div>
    </li>`
    ).join("")}
  `;

// $(document).ready(function () {
//   const $ulRoot = $("<ul ></ul>");
//   const mockData = [
//     {
//       imageSrc: "./image/main/img-thumb01.jpg",
//       title: "데모 title",
//       description: "데모 Sub Description",
//     },
//     {
//       imageSrc: "./image/main/img-thumb02.jpg",
//       title: "데모 title",
//       description: "데모 Sub Description",
//     },
//     {
//       imageSrc: "./image/main/img-thumb03.jpg",
//       title: "데모 title",
//       description: "데모 Sub Description",
//     },
//   ];

//   $.each(mockData, function (index, item) {
//     const $li = $("<li></li>");

//     const $imageLink = $("<a href='#!' title='go to Image'><img src='" + item.imageSrc + "' alt='image-demo2'></a>");
//     const $div = $("<div></div>");
//     const $titleLink = $("<a href='#!' title='go to content'><h4>" + item.title + "</h4></a>");
//     const $description = $("<p>" + item.description + "</p>");

//     $div.append($titleLink);
//     $div.append($description);

//     $li.append($imageLink);
//     $li.append($div);

//     $ulRoot.append($li);
//   });

//   // Đặt nội dung của ulRoot vào body (hoặc bất kỳ nơi nào bạn muốn)
//   $(".content-box-news").append($ulRoot);
// });


let modalMenuContent = `
  ${mockDataMenu.map((data) => `
    <div>
      <ul>
        <h4>${data.category}</h4>
        ${data.items.map((item) => `
          <li ><a href="#!" title="go to ...">${item}</a> </li>
          `).join("")}
      </ul>
    </div>
  `).join("")}
`;

let footerBox =  `
  ${Object.values(mockDataFooter).map((data) => `
    <ul>
      ${data.map((item) => `
        <li>${item}</li>
      `).join("")}
    </ul>
  `).join("")}
  `;


contentBoxNoticesElement.innerHTML = contentBoxNotices;
contentBoxEventElement.innerHTML = contentBoxEvent;
contentBoxNewsElement.innerHTML = contentBoxNews;
modalMenuElement.innerHTML = modalMenuContent;
footerBoxElement.innerHTML = footerBox;
