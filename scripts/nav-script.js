const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

    //close menu when link is selected
    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');

                navLinks.forEach((link2, index) => {
                    if (link2.style.animation) {
                        link2.style.animation = '';
                    } else {
                        link2.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });
                
                burger.classList.toggle('toggle');
            }
        });
    });

}

navSlide();