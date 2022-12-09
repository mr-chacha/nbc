'use strict';

const $header = document.querySelector('header');

// 헤더 - 네브바 스크롤시 애니메이션

(function () {
  window.addEventListener('scroll', function () {
    requestAnimationFrame(scrollCheck);
  });

  function scrollCheck() {
    const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
      $header.classList.add('active');
    } else {
      $header.classList.remove('active');
    }
  }
})();

(function () {
  const animationMove = (selector) => {
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const scrollMoveE1 = document.querySelectorAll(
    "[data-animation-scroll='true']"
  );
  for (let i = 0; i < scrollMoveE1.length; i++) {
    scrollMoveE1[i].addEventListener('click', function (event) {
      animationMove(this.dataset.target);
    });
  }
})();
