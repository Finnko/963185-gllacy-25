const btn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.callback-form');
const close = popup.querySelector('.callback__close');

const form = popup.querySelector('.callback');
const login = popup.querySelector('[name=login]');
const email = popup.querySelector('[name=email]');

let isStorageSupport = true;
let storage = '';

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-open');
    overlay.classList.add('overlay-open');
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }

    login.focus();
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-open');
    overlay.classList.remove('overlay-open');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('modal-open')) {
            popup.classList.remove('modal-open');
            overlay.classList.remove('overlay-open');
            popup.classList.remove('modal-error');
        }
    }
});

