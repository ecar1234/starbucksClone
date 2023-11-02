const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const thisYear = document.querySelector('.year');


searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


thisYear.textContent = new Date().getFullYear();
