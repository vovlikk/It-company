// Получаем элементы
const accountBtn = document.getElementById('accountBtn');
const loginModal = document.getElementById('loginModal');
const logincart = document.getElementById('loginBasket');
const closeBtn1 = document.querySelector('.close-btn1');
const closeBtn2 = document.querySelector('.close-btn2');
const cartBtn = document.getElementById("cartBtn");

// Функция для включения/выключения прокрутки страницы
function toggleBodyScroll(isBlocked) {
    if (isBlocked) {
        document.body.style.overflow = 'hidden';  // Блокирует прокрутку
    } else {
        document.body.style.overflow = '';  // Включает прокрутку
    }
}

// Открыть модальное окно для авторизации
accountBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    toggleBodyScroll(true);  // Блокируем прокрутку
});

// Закрыть модальное окно при клике на кнопку закрытия
closeBtn1.addEventListener('click', () => {
    loginModal.style.display = 'none';
    toggleBodyScroll(false);  // Включаем прокрутку
});

// Закрыть модальное окно при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
        toggleBodyScroll(false);  // Включаем прокрутку
    }
});

// Открыть окно с корзиной
cartBtn.addEventListener('click', () => {
    loginBasket.style.display = 'block';
    toggleBodyScroll(true);  // Блокируем прокрутку
});

// Закрыть окно с корзиной при клике на кнопку закрытия
closeBtn2.addEventListener('click', () => {
    loginBasket.style.display = 'none';
    toggleBodyScroll(false);  // Включаем прокрутку
});

// Закрыть окно с корзиной при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === logincart) {
        loginBasket.style.display = 'none';
        toggleBodyScroll(false);  // Включаем прокрутку
    }
});
