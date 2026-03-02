const lottoNumbersDiv = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '라이트 모드';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
    localStorage.setItem('theme', theme);
});

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    displayNumbers(sortedNumbers);
}

function displayNumber(number) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = number;
    lottoNumbersDiv.appendChild(numberDiv);
}

function displayNumbers(numbers) {
    lottoNumbersDiv.innerHTML = '';
    numbers.forEach(number => {
        displayNumber(number);
    });
}

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();
