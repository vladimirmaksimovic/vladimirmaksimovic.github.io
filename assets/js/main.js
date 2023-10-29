// Get main navbar links
const brand_link = document.querySelector(".brand > li a");
const navbar_links = document.querySelectorAll(".main-navbar > li a");

console.log(brand_link);
console.log(navbar_links);

// get page path
const page_path = window.location.pathname;

// Check page path and change color of the link
if (page_path === "/index.html") {
  brand_link.style.color = "blue";
} else if (page_path === "/pages/about.html") {
  header_links[1].style.color = "blue";
} else if (page_path === "/pages/reminder.html") {
  header_links[2].style.color = "blue";
}
