function scrollTrigger() {
    let navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 133) {
            navbar.classList.add('scroll');
        }
        else {
            navbar.classList.remove('scroll');
        }
    })
}

scrollTrigger();