import style from '../scss/main.scss';

// 给文章配图设置居中对齐样式
function setIamgeAlign(target) {
  if (target.closest('p')) {
    target.parentElement.classList.add('center');
  }
}

const images = document.querySelectorAll('img');
[...images].forEach(image => setIamgeAlign(image));