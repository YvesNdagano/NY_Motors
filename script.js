// =========================================================
// NY_MOTORS WEBSITE JAVASCRIPT
// =========================================================

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ NY_MOTORS site loaded successfully!");

    // ========== Navbar Mobile Toggle ==========
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('active');
        });
    }

    // ========== Fade-in Animation for Car Boxes ==========
    const cars = document.querySelectorAll('.car-box');
    cars.forEach((car, index) => {
        car.style.opacity = 0;
        car.style.transform = 'translateY(20px)';
        setTimeout(() => {
            car.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            car.style.opacity = 1;
            car.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // ========== Scroll Reveal Animation ==========
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cars.forEach(car => {
        fadeInObserver.observe(car);
    });

    // ========== Smooth Scroll for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========== Image Load Optimization ==========
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.addEventListener('load', function () {
            img.style.transition = 'opacity 0.6s ease';
            img.style.opacity = '1';
        });
    });

    // ========== Console Branding ==========
    console.log('%c🚗 NY_MOTORS', 'background: #111; color: #fff; font-size: 24px; padding: 8px 16px; font-weight: bold;');
    console.log('%cYour destination for premium vehicles', 'color: #777; font-size: 14px; font-style: italic;');
});
