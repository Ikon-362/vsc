let count = 0;

const counterElement = document.getElementById('counter');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    
    // Анимация лёгкого увеличения при клике
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 150);
});