// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log("NY_MOTORS site loaded successfully!");

    // Example: Add a small animation on load
    const cars = document.querySelectorAll('.car-box');
    cars.forEach((car, index) => {
        car.style.opacity = 0;
        setTimeout(() => {
            car.style.transition = 'opacity 0.8s ease';
            car.style.opacity = 1;
        }, index * 200);
    });
});
