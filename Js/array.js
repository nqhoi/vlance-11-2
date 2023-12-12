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

let contentBoxNoticesElement = document.getElementById("content-box-notices");
let contentBoxEventElement = document.getElementById("content-box-event");

let contentBoxNotices = `
<h2>NOTICES</h2>
<ul>${mockDataNotices
  .map(
    (data) => `<li>
    <span>${data.category}</span>
    <p>${data.categoryDesc}</p>
  </li>`
  )
  .join("")}
       </ul>`;

let contentBoxEvent = `
<h2>EVENTS</h2>
<ul>${mockDataEvents
  .map(
    (data) => ` <li><span>${data.category}</span>
    <div>
      <p>${data.categoryDesc}</p>
      <span>${data.categoryDesc}</span>
    </div>
  </li>`
  )
  .join("")}
       </ul>`;

contentBoxNoticesElement.innerHTML = contentBoxNotices;
contentBoxEventElement.innerHTML = contentBoxEvent;
