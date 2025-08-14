document.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.getElementById('categories-list');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', () => {
        categoriesList.scrollBy({
            left: -220,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        categoriesList.scrollBy({
            left: 220,
            behavior: 'smooth'
        });
    });

    const paymentMethodsList = document.getElementById('payment-methods-list');
    const leftArrow2 = document.getElementById('left-arrow-2');
    const rightArrow2 = document.getElementById('right-arrow-2');

    leftArrow2.addEventListener('click', () => {
        paymentMethodsList.scrollBy({
            left: -220,
            behavior: 'smooth'
        });
    });

    rightArrow2.addEventListener('click', () => {
        paymentMethodsList.scrollBy({
            left: 220,
            behavior: 'smooth'
        });
    });
});