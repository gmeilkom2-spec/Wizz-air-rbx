console.log('Wizz Air Roblox site loaded');


const form = document.getElementById('bookingForm');
const result = document.getElementById('bookingResult');


if (form) {
// ===== Регистрация / Вход =====
const regForm = document.getElementById('registerForm');
const logForm = document.getElementById('loginForm');
const authResult = document.getElementById('authResult');


if (regForm) {
regForm.addEventListener('submit', (e) => {
e.preventDefault();
const user = regForm[0].value;
const pass = regForm[1].value;
localStorage.setItem('wizzUser', JSON.stringify({ user, pass }));
authResult.textContent = '✅ Регистрация успешна!';
authResult.style.color = 'green';
regForm.reset();
});
}


if (logForm) {
logForm.addEventListener('submit', (e) => {
e.preventDefault();
const user = logForm[0].value;
const pass = logForm[1].value;
const saved = JSON.parse(localStorage.getItem('wizzUser'));


if (saved && saved.user === user && saved.pass === pass) {
authResult.textContent = '🟢 Вход выполнен. Добро пожаловать, ' + user;
authResult.style.color = '#e6007e';
} else {
authResult.textContent = '❌ Неверные данные';
authResult.style.color = 'red';
}
});
}


// ===== Бронирование =====
form.addEventListener('submit', (e) => {
e.preventDefault();
result.textContent = '✅ Рейс WZR9876 успешно забронирован!';
result.style.color = '#e6007e';
form.reset();
});
}
