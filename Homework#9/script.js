document.addEventListener("DOMContentLoaded", function() {
    const headerHeight = document.querySelector("header").offsetHeight;
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }
        });
    });
});
