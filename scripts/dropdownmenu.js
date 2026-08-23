/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    "#primaryNav > li"
  );

  menuItems.forEach(function (menuItem) {
    const submenu = menuItem.querySelector(":scope > ul");
    const link = menuItem.querySelector(":scope > a");

    if (!submenu || !link) {
      return;
    }

    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");

    link.addEventListener("click", function (event) {
      if (window.innerWidth <= 800) {
        event.preventDefault();

        const wasOpen =
          menuItem.classList.contains("submenu-open");

        menuItems.forEach(function (otherItem) {
          otherItem.classList.remove("submenu-open");

          const otherLink =
            otherItem.querySelector(":scope > a");

          if (otherLink) {
            otherLink.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        });

        if (!wasOpen) {
          menuItem.classList.add("submenu-open");
          link.setAttribute("aria-expanded", "true");
        }
      }
    });
  });
});
