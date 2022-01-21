// Get main navbar links
main_navbar_links = document.querySelectorAll(".main-navbar > li a");

// get page path
const page_path = window.location.pathname;

// Check page path and change color of the link
if (page_path === "/index.html") {
  main_navbar_links[0].style.color = "blue";
} else if (page_path === "/pages/about.html") {
  main_navbar_links[1].style.color = "blue";
} else if (page_path === "/pages/reminder.html") {
  main_navbar_links[2].style.color = "blue";
}