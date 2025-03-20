document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});
