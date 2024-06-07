var settingMenu = document.querySelector(".settings-menu");
function settingsMenuToggle() {
  settingMenu.classList.toggle("settings-menu-height");
}
var dark = document.getElementById("dark-btn");
dark.onclick = function () {
  dark.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  localStorage.getItem("theme");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") === "light") {
  dark.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
  dark.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
