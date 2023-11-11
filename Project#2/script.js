document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 74;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

let headerSticky = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        headerSticky.classList.add("header__sticky");
    } else {
        headerSticky.classList.remove("header__sticky");
    }
})

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav ul a');
window.addEventListener('scroll', function () {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
})

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
