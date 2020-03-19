import style from '../scss/main.scss';

// 给文章配图设置居中对齐样式
function setIamgeAlign(target) {
  if (target.closest('p')) {
    target.parentElement.classList.add('center');
  }
}

const images = document.querySelectorAll('img');
[...images].forEach(image => setIamgeAlign(image));

// Get dropdown item
const dropdownList = document.querySelector('.dropdown-container');

function showDropdown() {
  dropdownList.classList.add('open');
}

function hideDropdown() {
  dropdownList.classList.remove('open');
}

function toggleDropdown() {
  console.log(123);
  dropdownList.classList.toggle('open');
}

dropdownList.addEventListener('mouseover', showDropdown);
dropdownList.addEventListener('mouseleave', hideDropdown);

