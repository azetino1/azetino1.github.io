function toggleNavMenu() {
  const menu = document.getElementById("primaryNav");
  const button = document.querySelector(
    'button[aria-controls="primaryNav"]'
  );

  menu.classList.toggle("hide");

  if (button) {
    const isOpen = !menu.classList.contains("hide");
    button.setAttribute("aria-expanded", String(isOpen));
  }
}
