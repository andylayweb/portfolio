// Tutup navbar pas klik link

const navLinks = document.querySelectorAll(".nav-link");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Simulasikan tombol hamburger
    }
  });
});

// Dark Mode

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector("i");

// 1. Cek setting yang udah disimpan di browser
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateIcon(savedTheme);

// 2. Pas tombol diklik
themeToggle.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Simpan biar ga reset pas refresh
  updateIcon(newTheme);
});

// 3. Ganti icon bulan/matahari
function updateIcon(theme) {
  if (theme === "dark") {
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
  } else {
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }
}

document.addEventListener("click", function (e) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");
  if (navbar.classList.contains("show") && !navbar.contains(e.target) && !toggler.contains(e.target)) {
    toggler.click();
  }
});

// Animasi Fade In

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // tambah class pas masuk layar
        observer.unobserve(entry.target); //biar cuma jalan 1x
      }
    });
  },
  {
    threshold: 0.2, // animasi jalan pas 10% section keliatan
  }
);

// Suruh Js ngawasin semua element yg punya class .fade-in
const fadeElements = document.querySelectorAll(".fade-in");
fadeElements.forEach((el) => observer.observe(el));

// Link WA
const wa = document.getElementById("wa");
const nomorWA = "6285777666819"; // Ganti no wa kamu

wa.addEventListener("submit", function (e) {
  e.preventDefault(); //biar ngga reload halaman

  const url = `https://wa.me/${nomorWA}`;

  window.open(url, "_blank");
});
