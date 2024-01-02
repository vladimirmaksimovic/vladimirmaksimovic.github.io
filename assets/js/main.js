/* NAVBAR COLOR STYLES */

// Get main navbar links
const header_links = document.querySelectorAll(".header > nav ul li a");
const brand_link = document.querySelector(".brand > li a");
const navbar_links = document.querySelectorAll(".main-navbar > li a");

console.log(brand_link);
console.log(navbar_links);
console.log("header links >>", header_links);

// get page path
const page_path = window.location.pathname;

console.log("page path >>>", page_path);

// Check page path and change color of the link
/* if (page_path === "/index.html") {
  brand_link.style.color = "blue";
} else if (page_path === "/pages/about.html") {
  navbar_links[1].style.color = "blue";
} else if (page_path === "/pages/reminder.html") {
  navbar_links[2].style.color = "blue";
} */

for (let i = 0; i < navbar_links.length; i++) {
  console.log(header_links[i]);
  /* header_links[i].style.color = "blue"; */

  if (header_links[i].attributes.href === "#") {
    header_links[i].style.color = "blue";
  }
}

/* CONTENT TABS */

/* variables */
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

/* events */
for (let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener("click", function () {
    if (tabContent[i].className === "tab-content") {
      tabContent[i].classList.add("active-tab");
      tabBtns[i].classList.add("active-btn");
    } else {
      tabContent[i].classList.remove("active-tab");
      tabBtns[i].classList.remove("active-btn");
    }
  });
}
