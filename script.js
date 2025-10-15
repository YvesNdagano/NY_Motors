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





















// ========== NY_MOTORS JavaScript ===========

// document.addEventListener('DOMContentLoaded', function() {
    
    // // ========== Smooth Scroll Reveal Animation ==========
    // const observerOptions = {
    //     threshold: 0.15,
    //     rootMargin: '0px 0px -80px 0px'
    // };

    // const fadeInObserver = new IntersectionObserver(function(entries) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.opacity = '1';
    //             entry.target.style.transform = 'translateY(0)';
    //         }
    //     });
    // }, observerOptions);

    // Apply fade-in animation to all car boxes
    // const carBoxes = document.querySelectorAll('.car-box');
    // carBoxes.forEach((box, index) => {
        // Initial hidden state
        // box.style.opacity = '0';
        // box.style.transform = 'translateY(30px)';
        // box.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe for scroll animation
    //     fadeInObserver.observe(box);
    // });

    // ========== Image Loading Optimization ==========
    // const images = document.querySelectorAll('img[loading="lazy"]');
    
    // if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
    //     images.forEach(img => {
    //         img.src = img.src;
    //     });
    // } else {
        // Fallback for older browsers
    //     const imageObserver = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const img = entry.target;
    //                 img.src = img.dataset.src || img.src;
    //                 imageObserver.unobserve(img);
    //             }
    //         });
    //     });
        
    //     images.forEach(img => imageObserver.observe(img));
    // }

    // ========== Add Hover Effects Enhancement ==========
    // carBoxes.forEach(box => {
    //     box.addEventListener('mouseenter', function() {
    //         this.style.zIndex = '10';
    //     });
        
    //     box.addEventListener('mouseleave', function() {
    //         this.style.zIndex = '1';
    //     });
    // });

    // ========== Page Load Animation ==========
    // window.addEventListener('load', function() {
    //     document.body.style.opacity = '0';
    //     document.body.style.transition = 'opacity 0.3s ease';
        
    //     setTimeout(() => {
    //         document.body.style.opacity = '1';
    //     }, 100);
    // });

    // ========== Console Welcome Message ==========
//     console.log('%c🚗 Welcome to NY_MOTORS! ', 
//         'background: #111; color: #fff; font-size: 20px; padding: 10px;'
//     );
//     console.log('%cExplore our premium vehicle collection', 
//         'color: #666; font-size: 14px;'
//     );
// });


















// Mobile Menu Toggle
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const navMenu = document.querySelector('.nav-menu');
    
//     if (mobileMenuToggle) {
//         mobileMenuToggle.addEventListener('click', function() {
//             navMenu.classList.toggle('active');
            
            // Animate hamburger icon
    //         this.classList.toggle('active');
    //     });
    // }

    // Close mobile menu when clicking on a link
    // const navLinks = document.querySelectorAll('.nav-menu a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         navMenu.classList.remove('active');
    //         if (mobileMenuToggle) {
    //             mobileMenuToggle.classList.remove('active');
    //         }
    //     });
    // });

    // Smooth scrolling for anchor links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    // Add animation to car boxes on scroll
    // const observerOptions = {
    //     threshold: 0.1,
    //     rootMargin: '0px 0px -50px 0px'
    // };

    // const observer = new IntersectionObserver(function(entries) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.opacity = '1';
    //             entry.target.style.transform = 'translateY(0)';
    //         }
    //     });
    // }, observerOptions);

    // document.querySelectorAll('.car-box').forEach(box => {
    //     box.style.opacity = '0';
    //     box.style.transform = 'translateY(30px)';
    //     box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    //     observer.observe(box);
    // });

    // View Details button functionality
//     const viewDetailsButtons = document.querySelectorAll('.btn-primary');
//     viewDetailsButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const carName = this.closest('.car-box').querySelector('h3').textContent;
//             alert(`View details for ${carName}\n\nThis would typically open a detailed page or modal.`);
//         });
//     });
// });

// Handle window resize
// let resizeTimer;
// window.addEventListener('resize', function() {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function() {
//         const navMenu = document.querySelector('.nav-menu');
//         if (window.innerWidth > 768 && navMenu) {
//             navMenu.classList.remove('active');
//         }
//     }, 250);
// });























// Wait for the DOM to fully load
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("NY_MOTORS site loaded successfully!");

    // Example: Add a small animation on load
//     const cars = document.querySelectorAll('.car-box');
//     cars.forEach((car, index) => {
//         car.style.opacity = 0;
//         setTimeout(() => {
//             car.style.transition = 'opacity 0.8s ease';
//             car.style.opacity = 1;
//         }, index * 200);
//     });
// });
