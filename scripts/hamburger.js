function toggleNavMenu() {
    const navMenu = document.getElementById("primaryNav");

    if (navMenu) {
        navMenu.classList.toggle("hide");

        // Improve accessibility by updating aria-hidden attribute
        const isHidden = navMenu.classList.contains("hide");
        navMenu.setAttribute("aria-hidden", isHidden);
    } else {
        console.error("Element with ID 'primaryNav' not found.");
    }
}
