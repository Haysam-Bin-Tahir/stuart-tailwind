var sidebarToggleButton = document.getElementById("sidebar-toggle-button");
var sidebarMenu = document.getElementById("sidebar-menu");
sidebarToggleButton.addEventListener("click", function () {
  if (sidebarMenu.getAttribute("aria-expanded")) {
    sidebarMenu.removeAttribute("aria-expanded");
    sidebarMenu.removeAttribute("style");
  } else {
    sidebarMenu.setAttribute("aria-expanded", true);
    sidebarMenu.style.transform = "translateX(0)";
  }
  console.log(sidebarMenu.getAttribute("aria-expanded"));
});
