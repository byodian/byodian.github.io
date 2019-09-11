import style from '../scss/main.scss';
document.querySelector(`.site-nav__items a[href$="${window.location.pathname}"]`).classList.add('is-active');