const colorBtn = document.getElementById('#choice'),
    body = document.querySelector('body'),
    colorNumber = document.querySelector('.color');

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';

    colorBtn.addEventListener('click', () => {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        body.style.backgroundColor = color;
        colorNumber.textContent = color;
        colorBtn.style.color = color;
    });
};

getRandomColor();
