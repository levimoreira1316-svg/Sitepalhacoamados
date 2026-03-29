// DARK/LIGHT MODE
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.innerText = "☀️";
}

toggle.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.innerText = "🌙";
  }
};

// SCROLL ANIMATION
const items = document.querySelectorAll(".post-item");

const showOnScroll = () => {
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();
