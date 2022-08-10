const initMobileMenu = () => {
  const header = document.querySelector('.header');

  if (!header) {
    return;
  }

  const toggleMenuBtn = header.querySelector('.main-nav__toggle');

  toggleMenuBtn.addEventListener('click', () => {
    if (header.classList.contains('is-open')) {
      header.classList.remove('is-open');
      window.scrollLock.enableScrolling();
    } else {
      header.classList.add('is-open');
      window.scrollLock.disableScrolling();
    }
  });
};

export {initMobileMenu};
