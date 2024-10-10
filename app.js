const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a"); 
const closeBtn = document.querySelector(".close-btn"); // Select close button

// Toggle sidebar when hamburger is clicked
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Close sidebar when "X" button is clicked
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active"); // Remove active class from sidebar
  hamburger.classList.remove("active"); // Reset hamburger
});
