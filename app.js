const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a"); // Select all links in the sidebar

// Toggle sidebar when hamburger is clicked
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active"); // Toggle sidebar
  hamburger.classList.toggle("active"); // Toggle hamburger icon
});

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active"); // Remove active class from sidebar
    hamburger.classList.remove("active"); // Remove active class from hamburger
  });
});
