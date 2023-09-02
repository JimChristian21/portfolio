const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('mobile-nav');

navToggle.addEventListener('click', (e) => {

    const display = 'flex';

    if (navMobile.style.display === display) {

        navMobile.style.display = 'none';
    } else {
        
        navMobile.style.display = display;
    }
});