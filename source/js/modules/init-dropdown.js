const dropdown = document.querySelector('[data-dropdown="parent"]');
const dropdownBtn = document.querySelector('[data-dropdown="btn"]');

const breakpointMobile = matchMedia('(max-width: 1023px)');

const breakpointChecker = () => {

  if (breakpointMobile.matches) {
    dropdownBtn.addEventListener('click', () => {
      const parent = dropdownBtn.parentNode;

      if (parent.classList.contains('is-active')) {
        parent.classList.remove('is-active');
      } else {
        dropdown.classList.remove('is-active');
        parent.classList.toggle('is-active');
      }
    });
  }
};

const initDropdown = () => {
  if (!dropdown) {
    return;
  }
  breakpointChecker();
  window.addEventListener('resize', breakpointChecker);
};

export {initDropdown};


