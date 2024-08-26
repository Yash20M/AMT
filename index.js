let lastScrollTop = 0;
let isScrolling;

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
}

window.addEventListener("scroll", function () {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector(".navbar");

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

  // Clear the timeout if it exists
  clearTimeout(isScrolling);

  // Set a timeout to add 'hidden' class if scrolling stops
  isScrolling = setTimeout(function () {
    navbar.classList.remove("hidden");
  }, 3000); // Adjust timeout as needed
});
