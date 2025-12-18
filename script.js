console.log('Wizz Air Roblox site loaded');


const form = document.getElementById('bookingForm');
const result = document.getElementById('bookingResult');


if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
result.textContent = '✅ Рейс WZR9876 успешно забронирован!';
result.style.color = '#e6007e';
form.reset();
});
}
