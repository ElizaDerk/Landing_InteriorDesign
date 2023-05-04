const extraLink = document.querySelector('.extra-link');
const extraDropdown = document.querySelector('.extra-dropdown');
const arrow = document.querySelector('.fa-sharp')

extraLink.addEventListener('click', function(e) {
    e.preventDefault();
    extraDropdown.classList.toggle('active');
    arrow.classList.toggle('active')
});


const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

mobileMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});
