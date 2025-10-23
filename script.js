// ==============================
// Mobile Menu Toggle
// ==============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ==============================
// Dropdown Menu Toggle (Mobile)
// ==============================
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.querySelector('.dropdown-menu').classList.toggle('show');
    }
  });
});

// ==============================
// Reveal on Scroll
// ==============================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// ==============================
// Screen Resolution Detection & Auto Fit
// ==============================
function adjustLayoutForScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const body = document.body;

  console.log(`Detected resolution: ${width}x${height}`);

  // Reset scaling before applying new one
  body.style.transform = "scale(1)";
  body.style.transformOrigin = "top center";

  // Apply scaling or layout adjustments
  if (width < 400) {
    // Very small screens (small phones)
    body.style.transform = "scale(0.9)";
  } else if (width >= 400 && width < 600) {
    // Small to medium devices
    body.style.transform = "scale(0.95)";
  } else if (width > 1600) {
    // Large monitors
    body.style.transform = "scale(1.1)";
  } else {
    // Normal scaling for most screens
    body.style.transform = "scale(1)";
  }
}

// Initial detection on load
window.addEventListener("load", adjustLayoutForScreen);
// Recalculate on resize
window.addEventListener("resize", adjustLayoutForScreen);
// ==============================
// Screen Resolution Detection & Mobile Fit
// ==============================
function adjustLayoutForScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const body = document.body;
  const navLinks = document.querySelector('.nav-links');

  console.log(`Detected resolution: ${width}x${height}`);

  // Reset any previous scaling or styles
  body.style.transform = "scale(1)";
  body.style.transformOrigin = "top center";

  // Mobile phone view adjustments
  if (width <= 480) {
    // Compact layout for small phones
    body.style.transform = "scale(0.9)";
    body.style.padding = "0";
    document.documentElement.style.fontSize = "14px";

    // Ensure mobile nav menu behaves correctly
    if (navLinks) {
      navLinks.style.flexDirection = "column";
      navLinks.style.width = "100%";
      navLinks.style.background = "var(--sky-green)";
    }

  } else if (width > 480 && width <= 768) {
    // Slightly larger phones or tablets
    body.style.transform = "scale(0.95)";
    document.documentElement.style.fontSize = "15px";

  } else if (width > 1600) {
    // Large desktop or wide screen monitors
    body.style.transform = "scale(1.1)";
    document.documentElement.style.fontSize = "18px";

  } else {
    // Normal desktop view
    body.style.transform = "scale(1)";
    document.documentElement.style.fontSize = "16px";
  }
}

// Trigger on load and resize
window.addEventListener("load", adjustLayoutForScreen);
window.addEventListener("resize", adjustLayoutForScreen);


